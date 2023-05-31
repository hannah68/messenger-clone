'use client';

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FullMessageType } from "@/app/types";


interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      body
    </div>
  )
}

export default Body