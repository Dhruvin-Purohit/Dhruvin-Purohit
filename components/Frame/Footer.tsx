export default function Footer() {
  return <>&copy; 2022{new Date().getFullYear() === 2022 ? "" : new Date().getFullYear().toString()} Dhruvin Purohit</>;
}
