import { createStyles, Container, Group, Anchor, rem } from "@mantine/core";
import { YarnIcon } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#07477A",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  companyText: {
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterComponentProps {
  links?: { link: string; label: string }[];
}

export function FooterComponent({ links }: FooterComponentProps) {
  const { classes } = useStyles();
  const items = links?.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
      className={classes.companyText}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <YarnIcon size={28} />
          <a className={classes.companyText}>Company</a>
        </Group>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
