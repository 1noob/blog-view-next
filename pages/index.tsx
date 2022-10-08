import * as React from "react";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { partition } from "lib/utils";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Card } from "components/Card";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { List } from "components/List";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { allJobs, allRecommendations } from "contentlayer/generated";

const formatTags = new Intl.ListFormat("en", { type: "conjunction" });

const Home: NextPage<{
  jobs: Job[];
  recommendations: Recommendation[][];
}> = ({ jobs, recommendations }) => {
  return (
    <>
      <NextSeo title="Design Engineer" />

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          Alex Carpenter{" "}
          <span role="separator" aria-orientation="vertical">
            {"//"}
          </span>{" "}
          Design Engineer
        </Heading>
        <Spacer height="xl" />
        <Text
          fontSize={{ xs: "lg", sm: "xl" }}
          color="foregroundNeutral"
          style={{
            display: "inline-flex",
          }}
        >
          A detail oriented user interface engineer interested in CSS
          architecture, React, TypeScript, and design systems. Currently working
          at HashiCorp, helping build and maintain public-facing HashiCorp
          websites and web applications with&nbsp;Next.js.
        </Text>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth={{ md: "text" }} marginX="auto">
        <header>
          <Heading fontSize="xl">Experience</Heading>
        </header>
        <Spacer height="xxl" />
        <List>
          {jobs.map((job) => {
            const heading =
              job.company === "HashiCorp" ? (
                <Link href="/experience/hashicorp" underline>
                  {job.title}{" "}
                  <span role="separator" aria-orientation="vertical">
                    {"//"}
                  </span>{" "}
                  {job.company}
                </Link>
              ) : (
                <>
                  {job.title}{" "}
                  <span role="separator" aria-orientation="vertical">
                    {"//"}
                  </span>{" "}
                  {job.company}
                </>
              );
            return (
              <List.Item key={job._id}>
                <Box display="flex" gap="md">
                  {job.logo ? (
                    <Box display="flex" alignItems="flex-start" flexShrink={0}>
                      <Image
                        src={job.logo}
                        width={32}
                        height={32}
                        alt=""
                        style={{ borderRadius: 6 }}
                      />
                    </Box>
                  ) : null}
                  <Box flexGrow={1}>
                    <Box
                      display="flex"
                      flexDirection={{
                        xs: "column",
                        sm: "row-reverse",
                      }}
                      alignItems={{ sm: "center" }}
                      justifyContent={{ sm: "space-between" }}
                      gap="sm"
                      maxWidth="text"
                    >
                      <Text color="foregroundNeutral" fontSize="sm">
                        {format(parseISO(job.startDate), "y")} &mdash;{" "}
                        {job.endDate
                          ? format(parseISO(job.endDate), "y")
                          : "Now"}
                      </Text>
                      <Heading>{heading}</Heading>
                    </Box>
                    <Spacer height="sm" />
                    <Text>{job.location ? job.location : "Remote"}</Text>
                    {job.tags ? (
                      <>
                        <Spacer height="sm" />
                        <Text fontSize="sm" color="foregroundNeutral">
                          {formatTags.format(job.tags)}
                        </Text>
                      </>
                    ) : null}
                  </Box>
                </Box>
              </List.Item>
            );
          })}
        </List>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth="container" marginX="auto">
        <Box as="header" maxWidth={{ md: "text" }} marginX="auto">
          <Heading fontSize="xl">Recommendations</Heading>
        </Box>
        <Spacer height="xxl" />
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "flex-start" }}
          gap="md"
        >
          {recommendations.map((col, colIdx) => {
            return (
              <Box
                key={colIdx}
                display="flex"
                flexDirection="column"
                flexGrow={1}
                gap="md"
              >
                {col.map((rec, recIdx) => {
                  return (
                    <Card key={recIdx}>
                      <figure>
                        <blockquote>
                          <Text>{rec.text}</Text>
                        </blockquote>
                        <Spacer height="md" />
                        <Box as="figcaption" display="flex" gap="sm">
                          {rec.avatar ? (
                            <Box
                              display="flex"
                              alignItems="flex-start"
                              flexShrink={0}
                            >
                              <Image
                                src={rec.avatar}
                                width={32}
                                height={32}
                                alt=""
                                style={{ borderRadius: 6 }}
                              />
                            </Box>
                          ) : null}
                          <Box>
                            <Text>{rec.name}</Text>
                            <Text color="foregroundNeutral" fontSize="sm">
                              {rec.title}, {rec.company}
                            </Text>
                          </Box>
                        </Box>
                      </figure>
                    </Card>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth="text" marginX="auto">
        <header>
          <Heading fontSize="xl">Connect</Heading>
        </header>
        <Spacer height="xxl" />
        <List>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="mailto:im.alexcarpenter@gmail.com">
                im.alexcarpenter@gmail.com
              </Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="https://twitter.com/hybrid_alex">Twitter</Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="https://github.com/alexcarpenter">Github</Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="https://www.linkedin.com/in/imalexcarpenter/">
                LinkedIn
              </Link>
            </Text>
          </List.Item>
        </List>
      </Box>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const jobs = allJobs.sort((a, b) => {
    return compareDesc(new Date(a.startDate), new Date(b.startDate));
  });

  const recommendations = allRecommendations.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      jobs,
      recommendations: partition(
        (rec: Recommendation) =>
          ["Jimmy Merritello", "Amy Stuart", "Andrew Possehl"].includes(
            rec.name
          ),
        recommendations
      ),
    },
  };
}
