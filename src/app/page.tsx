import { Room } from "@/app/Room";
import styles from "@/components/Editor.module.css";
import CollaborativeEditor from "@/components/Editor";
import { Suspense } from "react";
import { Loading } from "@/components/Loading";

// Learn how to structure your collaborative Next.js app
// https://liveblocks.io/docs/guides/how-to-use-liveblocks-with-nextjs-app-directory

export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.editorContainer}>
          <Suspense fallback={<Loading />}>
            <Room>
              <CollaborativeEditor />
            </Room>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
