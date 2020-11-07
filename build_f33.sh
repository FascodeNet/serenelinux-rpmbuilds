#!/usr/bin/env bash
docker build -t serene-mockbuild:latest .
docker run --cap-add=SYS_ADMIN -t -i -v $PWD/out:/home/mockbuild/serenelinux-rpmbuilds/out serene-mockbuild:latest bash -c "sudo chmod 777 /home/mockbuild/serenelinux-rpmbuilds/out;cd /home/mockbuild/serenelinux-rpmbuilds;git pull -f;./build_srpms.py;./build_docker_srpm_to_rpm.py fedora-33-x86_64"
