<script>
  import LinkCard from "../LinkCard.svelte";

  const data = [
    {
      label: "3x USACO Finalist",
      content: "Hello World!",
    },
    {
      label: "5x AIME Qualifier",
      content: "Testing 123",
    },
  ];

  let activeTab = data[0].label;
</script>

<div class="flex">
  <div class="flex-shrink-0">
    <ul class="flex flex-col relative">
      {#each data as { label }}
        <li class="py-2 {activeTab === label ? 'text-accent' : 'text-blueGray-500'} font-mono text-sm cursor-pointer"
            on:click={() => activeTab = label}>
          {label}
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex-1 ml-8 py-1 text-blueGray-400">
    In 2019, 2020, and 2021, I was one of 26 students invited to the national USA Computing Olympiad training camp.
  </div>
</div>

<!--<div class="flex flex-wrap md:-mx-6">-->
<!--  <LinkCard title="USACO Finalist 2019" link="http://www.usaco.org/index.php?page=finalists19">-->
<!--    In 2019, I was selected as one of 27 individuals to the USA Computing Olympiad Training Camp.-->
<!--  </LinkCard>-->
<!--  <LinkCard title="USACO Finalist 2020" link="http://www.usaco.org/index.php?page=finalists20">-->
<!--    In 2020, I was selected for the second year as one of 27 individuals to the USA Computing Olympiad Training Camp.-->
<!--  </LinkCard>-->
<!--  <LinkCard title="USACO Finalist 2021" link="http://www.usaco.org/index.php?page=finalists21">-->
<!--    In 2021, I was selected for the third year as one of 27 individuals to the USA Computing Olympiad Training Camp.-->
<!--  </LinkCard>-->
<!--</div>-->