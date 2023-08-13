# 허스키 초기 셋업
echo "\033[44;1;37m YARN \033[47;30m 깃훅을 위한 husky 설정을 진행합니다... \033[0m"
yarn husky install

# 깃 정책 셋업
echo "\033[45;1;37m GIT \033[47;30m pull 설정을 rebase=false로 변경합니다... \033[0m"
echo "git config pull.rebase false"
git config pull.rebase false