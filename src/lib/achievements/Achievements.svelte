<script>
  import CardGrid from "../CardGrid/CardGrid.svelte";
  import Card from "../CardGrid/Card.svelte";
</script>

<CardGrid>
  <Card title="3x USACO Finalist" tags={["Competitive Programming", "Olympiads"]}>
    In <a href="http://www.usaco.org/index.php?page=finalists19" target="_blank" class="link">2019</a>, <a href="http://www.usaco.org/index.php?page=finalists20" target="_blank" class="link">2020</a>, and <a href="http://www.usaco.org/index.php?page=finalists21" target="_blank" class="link">2021</a>,
    I was selected as part of 26 students to participate in the national USA Computing Olympiad training camp.
  </Card>
  <Card title="5x AIME Qualifier" tags={["Math", "Olympiads"]}>
    In 2017, 2018, 2019, 2020, and 2021, I qualified to take the American Invitational Mathematics Examination (AIME), which is offered to the top 2.5% of students.
  </Card>
</CardGrid>