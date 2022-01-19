export default function Cursor() {
  return (
    <>
      <div id="cursor" className="fixed w-1 h-1 transition duration-500 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pointer-events-none z-[1]"></div>
      <div id="cursor-trail" className="fixed w-8 h-8 transition duration-500 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-25 border-2 border-white rounded-full pointer-events-none z-[1]"></div>
    </>
  );
}
