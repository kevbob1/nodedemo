# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  config.vm.network :private_network, type: "dhcp"

  config.vm.define "node" do |node|
    node.ssh.username = "root"
    node.vm.allow_fstab_modification = false
    node.vm.provider "docker" do |d|
      d.image = "kevbob/docker-vagrant:jammy-1.0.1-1"
      d.has_ssh = true
      d.remains_running = true
      d.name = "nodedemo"
    end
    node.ssh.extra_args = ["-t", "cd /vagrant; bash --login"]
    node.vm.network "forwarded_port", guest: 3000, host: 3000

    node.vm.provision "shell", privileged: false, inline: <<-SHELL
      #os
      apt-get update
      apt-get install -y \
          redis-tools \
          iputils-ping

      #nvm
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
      export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
      cd /vagrant
      nvm install
    SHELL

    node.vm.provision "shell", privileged: false, inline: <<-SHELL
      #app
      export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
      cd /vagrant
      corepack enable
      corepack prepare —-activate
      yarn install
    SHELL

  end

  config.vm.define "redis" do |redis|
    redis.vm.provider "docker" do |d|
      d.image = "redis:6"
      d.name = "redis"
      d.expose = ["6379"]
    end

    redis.vm.network "forwarded_port", guest: 6379, host: 6479

  end

  config.vm.define "neo" do |neo|
    neo.vm.provider "docker" do |d|
      d.image = "neo4j"
      d.name = "neo4j"
      d.expose = ["7474", "7687"]
    end

    neo.vm.network "forwarded_port", guest: 7474, host: 7474 
    neo.vm.network "forwarded_port", guest: 7687, host: 7687 

  end
end
