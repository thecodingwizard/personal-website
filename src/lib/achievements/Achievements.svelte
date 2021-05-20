<script>
  const data = [
    {
      id: "usaco",
      label: "3x USACO Finalist",
    },
    {
      id: "math",
      label: "5x AIME Qualifier",
    },
  ];

  let activeTab = data[0];
</script>

<div>
  <ul class="flex relative -mx-3">
    {#each data as tab}
      <li class="py-2 px-3 text-lg {activeTab === tab ? 'text-accent' : 'text-blueGray-400'} font-mono cursor-pointer"
          on:click={() => activeTab = tab}>
        {tab.label}
      </li>
    {/each}
  </ul>
  <div class="flex-1 mt-4 text-blueGray-400 max-w-prose">
    {#if activeTab.id === "usaco"}
      In <a href="http://www.usaco.org/index.php?page=finalists19" target="_blank" class="link">2019</a>, <a href="http://www.usaco.org/index.php?page=finalists20" target="_blank" class="link">2020</a>, and <a href="http://www.usaco.org/index.php?page=finalists21" target="_blank" class="link">2021</a>,
      I was selected as part of 26 students to participate in the national USA Computing Olympiad training camp.
    {:else if activeTab.id === "math"}
      In 2017, 2018, 2019, 2020, and 2021, I qualified to take the American Invitational Mathematics Examination (AIME), which is offered to the top 2.5% of students.
    {/if}
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