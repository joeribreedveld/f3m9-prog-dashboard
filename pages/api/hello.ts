// Imports
import type { NextApiRequest, NextApiResponse } from "next";

// Types
type Data = {
  name: string;
};

// Functions
function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}

// Exports
export default handler;
