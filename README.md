# sainte-bernadatte

1. Launch the command `./tools/certificate.sh`. It will install a local CA in your system.
2. Run `sudo vi /etc/hosts` and add `dev.saintebernadattemontpellier.cef.fr` to the first line. It will map this dev domain to localhost on your machine.
3. Run `./tools/start.sh -e dev build`
4. Run `./tools/start.sh -e dev up`
5. Go to https://dev.saintebernadattemontpellier.cef.fr  
   Your dev env should be ready.
