Summary: yamad repo
Name: yamad-repo
Version: 1.0.2.8
Release: 1
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL
Requires:   serenelinux-keyring
%global debug_package %{nil}
%description
yamad repo
%prep

%build

%install
rm -rf %{buildroot}
mkdir -p %{buildroot}/etc/yum.repos.d/
cat <<'EOF' > %{buildroot}/etc/yum.repos.d/yamad.repo
[yamad]
name=yamad Repo $releasever
mirrorlist=https://raw.githubusercontent.com/FascodeNet/serenelinux-f-mirrorlist/$releasever/mirrorlist.x86_64
gpgcheck=1
enabled=1
countme=1
type=rpm
metadata_expire=6h
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-serene
EOF
%clean
rm -rf %{buildroot}

%post

%postun

%files
/etc/yum.repos.d/yamad.repo
%changelog
