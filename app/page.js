"use client"
import Image from "next/image";
import {useState, useEffect} from "react";
import { Firestore } from "firebase/firestore";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState("")

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, "inventory"))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc)=>{
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
  }
  
  const removeItem = async (item) =>{
    const docRef = doc(collection(firestore, "inventory"), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      const {quantity} = docSnap.data()
      if(quantity ===  1){
        await deleteDoc(docRef)
      }
      else{
        await setDoc(docRef, {quantity: quantity-1})
      }
    }

    await updateInventory()
  }

  useEffect(()=>{
    updateInventory()
  }, [])

  return (
    <Box>
      <Typography variant="h1">Pantry Tracker</Typography>
      {
        inventory.forEach((item)=>{
          return (
          <Box>
          {item.name}
          {item.count}
          </Box>)
        })
      }
    </Box>
  );
}
