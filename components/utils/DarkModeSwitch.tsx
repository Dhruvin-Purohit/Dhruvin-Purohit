import Moon from "./Moon";
import Sun from "./Sun";

export default function DarkModeSwitch({ on }: { on: boolean }) {
  return (
    <>
    {/* @TODO: Make this thing look better */}
      <div
        className={
          "flex items-center w-12 h-6 p-1  rounded-full cursor-pointer md:w-14 md:h-7" +
          (on ? " bg-green-500" : " bg-gray-300")
        }
      >
        <div
          className={
            "w-5 h-5 md:w-6 md:h-6 text-material-primary-500 duration-300 ease-in-out relative rounded-full" +
            (on ? " transform translate-x-6" : "")
          }
        >
          {on ? (
            <Sun className="w-full h-full" />
          ) : (
            <Moon className="w-full h-full" />
          )}
        </div>
      </div>
    </>
  );
}
