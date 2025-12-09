import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateComponentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import "../index.css"
import { Sidebar } from "../components/Sidebar"


export function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);

  return <div>
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-200 ">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }}/>
      <div className="flex justify-end gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" text="AddContent" startIcon={<PlusIcon />}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
      </div>
      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/cbajpai7/status/1997267545909572050?s=20" title="First tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=cUIRxFvAOqE" title="First video" />
      </div>
    </div>
  </div>
  
}

