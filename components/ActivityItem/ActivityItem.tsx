import Link from "next/link";
import type { Activity } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Text } from "components/Text";
import * as styles from "./ActivityItem.css";

const ActivityItem = ({ date, body }: Activity) => {
  const MDXContent = useMDXComponent(body.code);
  return (
    <article>
      <div className={styles.content}>
        <MDXContent
          components={{
            a: (props: any) => (
              <Link href={props.href}>
                <a>{props.children}</a>
              </Link>
            ),
          }}
        />
      </div>
      <Text as="time" dateTime={date} color="foregroundNeutral">
        {new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
        })}
      </Text>
    </article>
  );
};

export { ActivityItem };
