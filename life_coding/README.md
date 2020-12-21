# 잘 안되는 부분

1. Create

- submit을 했을 때, setMaxId(maxId + 1)를 해서 maxId를 증가시켜주었는데, 처음에 create했을 때는 id가 증가하지 않고 두 번째 create부터 id가 증가한다.

2. Delete

- delete 버튼을 클릭했을 때, confirm 창이 나오고 확인을 클릭하면 confirm창이 한 번 더 나온다. 다시 확인을 클릭해야 삭제가 정상적으로 동작한다.
