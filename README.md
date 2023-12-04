# sainte-bernadatte

First of all, you have to install mkcert to your machine. https://github.com/FiloSottile/mkcert  
This tool allows to make locally-trusted development certificates, allowing to work with https in local env.

Thereafter, follow these steps:

1. Launch the command `./tools/init.sh`. It will install a local CA in your system and initialize pre-commit hook.
2. Run `sudo vi /etc/hosts` and add `dev.saintebernadattemontpellier.cef.fr` to the first line. It will map dev.saintebernadattemontpellier.cef.fr domain to localhost on your machine.
3. Run `./tools/start.sh -e dev build` to build the container
4. Run `./tools/start.sh -e dev up` to up the container
5. Go to https://dev.saintebernadattemontpellier.cef.fr  
   Your dev env should be ready.
