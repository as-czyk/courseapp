import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export namespace Mountain {
  export const DB_COLLECTION = "mountain";

  export const API = {
    getMountains: async (): Promise<any> => {
      try {
        const mountainCollectionRef = collection(db, DB_COLLECTION);
        const querySnapshot = await getDocs(mountainCollectionRef);
        const mountains = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return mountains;
      } catch (e) {
        return e;
      }
    },
  } as const;
}
