import Image from "next/image";
import Home from "./home/page";
import { redirect } from "next/navigation";

export default function page() {

   redirect("/login");
  
}
