// const colorGen = () => {
// return `// background: ${"#" + Math.floor(Math.random() * 16777215).toString(16)}; //`;
// };
TODO
時間割り選択画面のローディング制御

 <!-- const searchSubjectResults = [];

  data &&
    data.searchSubject.map((block, index) => {
      searchSubjectResults.push(
        <>
          <ListItem key={index}>
            <ListItemText
              primary={`${block.block} ${block.name}`}
              key={`itemText-${index}`}
            />
          </ListItem>
          <Divider key={`divider-${index}`} />
        </>
      );
    });
  return <ResultList component="nav">{searchSubjectResults}</ResultList>; -->

Fragment を繰り返しで何度も出力する場合、unique key の warning がでるので　 div を使おう

onClick={() => hoge()}にしないと一生ループで実行される
onClick={hoge()}だとだめ
