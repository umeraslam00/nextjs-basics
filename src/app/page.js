import Image from "next/image";
import Link from "next/link";

  /**
   * The Home page.
   *
   * This page displays a heading and a paragraph of dummy text. It also
   * uses the `map` function to display a list of numbers and a list of
   * objects.
   *
   * @returns A JSX element representing the Home page.
   */
export default function Home() {
  
  const user = "abcd";

  const array = [1,2,3,4,5,6,7,8]

  const objectArray = [{name: "umer", age: "15"}, {name: "Haji", age: "13"}, {name: "Tipu", age: "11"}, {name: "Rana", age: "19"}]

  return (
    <>
      <h1 className="mt-15 mb-3">Welcome: Umer Aslam</h1>

      <div className="font-bold">List of Users</div>
      <div className="mb-2">{user}</div>

      {/* Using Map on an array of numbers. */}
      <div className="font-bold">List of Items</div>
      <div className="flex mb-2">{array.map((item) => <div>{item}</div>)}</div>

      {/* Using Map on an array of Objects. */}
      <div className="flex flex-col">
        <div className="font-bold">List of Objects</div>
        {objectArray.map(
          (person) => (
            <div>{person.name} is {person.age} years old.</div>

          )
        )}
      </div>


      <div className="font-bold mt-3">Links:</div>
      <div className="flex flex-col">
      <Link href="/about" className="text-blue-400">About Page</Link>
      <Link href="/posts" className="text-blue-400">Posts</Link>
      </div>

    </>

  );
}
