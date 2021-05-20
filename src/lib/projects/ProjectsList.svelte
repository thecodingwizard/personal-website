<script>
  import ProjectsCard from "./ProjectsCard.svelte";
</script>

<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
  <ProjectsCard title="USACO Guide" link="https://github.com/cpinitiative/usaco-guide/" tags={["Gatsby", "React", "Tailwind", "Firebase"]}>
    The USACO Guide is a free collection of curated, high-quality competitive programming resources aimed to bring
    contestants from Bronze to Platinum and beyond.
  </ProjectsCard>
  <ProjectsCard title="Competitive Programming Initiative" link="https://joincpi.org/" tags={["Volunteering"]}>
    I'm the founder of the Competitive Programming Initiative, a student-run nonprofit organization dedicated to
    promoting competitive programming amongst students.
  </ProjectsCard>
  <ProjectsCard title="Competitive Programming Solutions"
                link="https://github.com/thecodingwizard/competitive-programming/" tags={["Competitive Programming"]}>
    This Github repository contains solutions to some of the 900+ competitive programming problems I've solved!
  </ProjectsCard>
  <ProjectsCard title="Realtime IDE"
                link="https://github.com/cpinitiative/ide" tags={["Vite", "React", "Firebase"]}>
    A realtime collaborative IDE with code execution and input/output, designed for competitive programming and USACO.
  </ProjectsCard>
  <ProjectsCard title="Personal Website"
                link="https://github.com/thecodingwizard/personal-website" tags={["Svelte", "SvelteKit", "Tailwind"]}>
    This site! Built with Svelte, SvelteKit, and Tailwind CSS.
  </ProjectsCard>
</div>