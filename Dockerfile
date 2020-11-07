FROM fedora:33
MAINTAINER kokkiemouse <kokkiemouse@gmail.com>

RUN dnf install -y mock rpmdevtools yum-utils patch git python \
 && dnf clean all \
 && useradd mockbuild \
 && usermod mockbuild -a -G mock 
RUN echo '%mock ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
#ADD bin/ /home/mockbuild/bin/

#RUN chmod +x /home/mockbuild/bin/* \
# && chown -R mockbuild:mockbuild /home/mockbuild/bin

USER mockbuild
RUN git clone https://github.com/FascodeNet/serenelinux-rpmbuilds.git /home/mockbuild/serenelinux-rpmbuilds
RUN rpmdev-setuptree

VOLUME ["/var/lib/mock"]

USER mockbuild
CMD ["/usr/bin/bash","-c", "cd /home/mockbuild/serenelinux-rpmbuilds;git pull -f"]
