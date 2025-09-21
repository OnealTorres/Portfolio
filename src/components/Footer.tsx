import { ActionIcon, Container, Group, Text } from "@mantine/core";

export default function Footer() {
  //   const groups = data.map((group) => {
  //     const links = group.links.map((link, index) => (
  //       <Text<"a">
  //         key={index}
  //         className="link"
  //         component="a"
  //         href={link.link}
  //         onClick={(event) => event.preventDefault()}
  //       >
  //         {link.label}
  //       </Text>
  //     ));

  //     return (
  //       <div className="wrapper" key={group.title}>
  //         <Text className="title">{group.title}</Text>
  //         {links}
  //       </div>
  //     );
  //   });

  return (
    <footer className="footer reversed-gradient-bg">
      <Container className="inner">
        <div className="logo">
          <span className="self-center text-lg font-semibold flex flex-row">
            onealtorres <p className="animated_underscore">_</p>
          </span>
          <Text size="xs" c="dimmed" className="description">
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className="groups">
          <Group gap={0} className="social" justify="flex-end" wrap="nowrap">
            <ActionIcon
              onClick={() => (window.location.href = "https://www.facebook.com/onealryan.torres.9")}
              size="lg"
              color="gray"
              variant="subtle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </ActionIcon>
            <ActionIcon
              onClick={() => (window.location.href = "https://github.com/OnealTorres")}
              size="lg"
              color="gray"
              variant="subtle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </ActionIcon>
            <ActionIcon
              onClick={() => (window.location.href = "https://www.linkedin.com/in/oneal-ryan-torres-780061353/")}
              size="lg"
              color="gray"
              variant="subtle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </ActionIcon>
          </Group>
        </div>
      </Container>
      <Container className="afterFooter">
        <Text c="dimmed" size="sm">
          Designed & Built with ❤︎ by Oneal Ryan Torres <br />{" "}
          <p className="text-xs">@ 2025 Oneal Ryan Torres. All right reserved.</p>
        </Text>
        <Text c="dimmed" size="sm"></Text>
      </Container>
    </footer>
  );
}
