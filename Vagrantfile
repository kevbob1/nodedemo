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

  config.vm.define "default" do |default|
    default.ssh.username = "root"
    default.vm.allow_fstab_modification = false
    default.vm.provider "docker" do |d|
      d.image = "kevbob/docker-vagrant:jammy-1.0.1"
      d.has_ssh = true
      d.remains_running = true
    end
    default.vm.network "forwarded_port", guest: 3000, host: 3000

    default.vm.provision "shell", privileged: false, inline: <<-SHELL
      apt-get update

      #nvm
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
      export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
      cd /vagrant
      nvm install
      npm install -g yarn 
    SHELL

    default.vm.provision "shell", privileged: false, inline: <<-SHELL
      #app
      cd /vagrant
      yarn install
    SHELL

  end

  config.vm.define "redis" do |redis|
    redis.vm.provider "docker" do |d|
      d.image = "redis:5"
    end

    redis.vm.network "forwarded_port", guest: 6379, host: 6479

  end
end
