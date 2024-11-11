import Link from "next/link"

export default function Home() {
  function calculate(x: number, y: number) {
    return x + y
  }

  return (
    <div>
      <p>Hello world - localhost:3000</p>

      <p>What is 2 + 2 = {2 + 2}</p>
      <p>What is 2 - 3 = {2 - 3}</p>
      <p>What is 2 * 3 = {2 * 3}</p>
      <p>What is 3 / 3 = {3 / 3}</p>

      <p>What is 7 + 9 = {calculate(7, 9)}</p>

      {/* Ternary Operator */}
      <p>Is 10 &gt; 5 = {10 > 5 ? "TRUE" : "FALSE"} </p>
      <p>Is 5 &gt; 10 = {5 > 10 ? "TRUE" : "FALSE"} </p>

      {/* Not Recommended */}
      <a href=""></a>

      {/* Instead, use <Link> */}
      {/* Components use Capital Letter */}
      <Link
        href={"/test"}
        className=" font-serif text-sky-500 hover:text-sky-200"
      >
        Navigate to About
      </Link>

      <div
        className="
      flex justify-center items-center gap-8
      h-screen bg-slate-800"
      >
        <p>Test</p>
        <p className="bg-slate-600">Test</p>
        <p>Test</p>
      </div>
    </div>
  )
}
