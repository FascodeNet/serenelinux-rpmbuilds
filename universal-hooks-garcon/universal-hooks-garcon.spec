Summary: garcon japanese
Name: universal-hooks-garcon
Version: 1.0.0.0
Release: 1
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL
Requires: yum-plugin-universal-hooks
%global debug_package %{nil}
%description
garcon japanese
%prep

%build

%install
rm -rf %{buildroot}
mkdir -p %{buildroot}/etc/dnf/universal-hooks/pkgs/garcon/transaction
cat <<'EOF' > %{buildroot}/etc/dnf/universal-hooks/pkgs/garcon/transaction/japanese_hook.sh
#!/usr/bin/env bash
echo "Name[ja]=設定" >> /usr/share/desktop-directories/xfce-settings.directory
EOF
chmod 755  %{buildroot}/etc/dnf/universal-hooks/pkgs/garcon/transaction/japanese_hook.sh
%clean
rm -rf %{buildroot}

%post

%postun

%files
/etc/dnf/universal-hooks/pkgs/garcon/transaction/japanese_hook.sh
%changelog
