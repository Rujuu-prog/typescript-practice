/* eslint-disable @typescript-eslint/no-unused-vars */
//**typescriptの基本の型 */

//boolean
let bool: boolean = true;

//number 数字
let num: number = 0;

//string 文字
let str: string = "A";

//Array 配列 書き方2通り
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [3, 4, 5];

//tuple 配列の要素の方を指定?
let tuple: [number, string] = [0, "A"];

//any 何でも入る なるべく使わないこと
let any1: any = false;

//void 関数の返却値がない場合に設定 書かなくとも推測してくれる
const funcA = (): void => {
  const test = "Test";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object obj2はあまり意味がなく、なんでも入れれてしまうが、obj3はよく使う。
let obj1: object = {};
let obj2: {} = {};
let obj3: { id: number; name: string } = { id: 0, name: "AAAA" };
