export const Practice2 = () => {
  //()の後ろで返却値の型指定
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    console.log(calcTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
