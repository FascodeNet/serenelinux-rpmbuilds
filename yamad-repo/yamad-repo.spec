Summary: yamad repo
Name: yamad-repo
Version: 1.0.2.2
Release: 1%{?dist}
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
EOF
%clean
rm -rf %{buildroot}

%post

%postun

%files
/etc/yum.repos.d/yamad.repo
%changelog
