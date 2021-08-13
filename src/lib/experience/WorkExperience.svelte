<script>
  const data = [
    {
      id: "alphastar",
      label: "AlphaStar Academy",
    },
    {
      id: "tutoring",
      label: "Private USACO Tutoring",
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
    {#if activeTab.id === "alphastar"}
      In <a href="http://www.usaco.org/index.php?page=finalists19" target="_blank" class="link">2019</a>, <a href="http://www.usaco.org/index.php?page=finalists20" target="_blank" class="link">2020</a>, and <a href="http://www.usaco.org/index.php?page=finalists21" target="_blank" class="link">2021</a>,
      I was selected as part of 26 students to participate in the national USA Computing Olympiad training camp.
    {:else if activeTab.id === "tutoring"}
      In 2017, 2018, 2019, 2020, and 2021, I qualified to take the American Invitational Mathematics Examination (AIME), which is offered to the top 2.5% of students.
    {/if}
  </div>
</div>