Summary: yamad repo
Name: yamad-repo
Version: 1.0.2.6
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
baseurl=https://repo.dyama.net/serenelinux_fedora/$releasever/
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
