Summary: yamad repo
Name: yamad-repo
Version: 1.0.2.4
Release: 1
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

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
name=yamad Repo
baseurl=https://d.0u0.biz/repo/serene_fedora/
gpgcheck=0
enabled=1
countme=1
type=rpm
metadata_expire=6h
EOF
%clean
rm -rf %{buildroot}

%post

%postun

%files
/etc/yum.repos.d/yamad.repo
%changelog
