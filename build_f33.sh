#!/usr/bin/env bash
docker build -t serene-mockbuild:latest .
docker run --cap-add=SYS_ADMIN -t -i serene-mockbuild:latest "bash -c cd /home/mockbuild/serenelinux-rpmbuilds;git pull -f;./build_srpms.py;./build_docker_srpm_to_rpm.py fedora-33-x86_64"
