import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Text,
  Title,
  useMantineTheme,
  rem,
  Container,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: "#009FE4",
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.colors.gray,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  desc: {
    color: "#888888",
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
  },
  carousel: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
  },
}));

interface CardProps {
  title: string;
  subTitle: string;
  desc: string;
}

function Card({ title, subTitle, desc }: CardProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.card}>
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.category} size="s">
          {subTitle}
        </Text>
        <Text className={classes.desc} size="xs">
          {desc}
        </Text>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Who we are",
    subTitle: "Technology company",
    desc: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "What we do",
    subTitle: "Professional brand management",
    desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam elus modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "How we do",
    subTitle: "Strategize, Design, Collaborate",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi conseguatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
  },
];

export function DescriptionCarouselComponent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
