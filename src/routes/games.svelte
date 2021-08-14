<script type="ts">
  import "../styles/globals.css";
  import SectionTitle from "../lib/SectionTitle.svelte";
  import CardGrid from "../lib/CardGrid/CardGrid.svelte";
  import Card from "../lib/CardGrid/Card.svelte";
</script>

<svelte:head>
  <title>Games | thecodingwizard</title>
  <meta name="robots" content="noindex">
</svelte:head>

<div class="bg-blueGray-900 min-h-screen">
  <div class="container">
    <a href="/" class="text-blueGray-400 hover:text-blueGray-200 hover:underline md:text-lg">&larr; Back to Main Site</a>
    <div class="h-4"></div>
    <SectionTitle title="Party Games" />

    <div class="text-body-container">
      <p>
        These are some of my favorite games to play with friends. If you're looking for more, check out <a href="https://www.dicebreaker.com/mechanics/social-deduction/best-games/best-social-deduction-games" target="_blank" rel="noreferrer" class="link">these</a> <a href="https://boardgametheories.com/the-seven-best-social-deduction-games/" target="_blank" rel="noreferrer" class="link">two</a> articles.
      </p>
    </div>
    <div class="h-8 lg:h-12"></div>

    <CardGrid>
      <Card title="Secret Hitler" link="https://secrethitler.io/">
        
      </Card>
      <Card title="Resistance" link="https://netgames.io/games/avalon/">
        
      </Card>
      <Card title="Deception: Murder in Hong Kong" link="https://krimi.vercel.app/">
        
      </Card>
      <Card title="Coup" link="http://coup.thebrown.net/">
        
      </Card>
      <Card title="Just One" link="https://just1.herokuapp.com/">
        
      </Card>
      <Card title="Hanabi" link="https://hanab.live/">
        2-5 player
      </Card>
      <Card title="Illusion" link="https://pandasaurusgames.com/products/illusion">
        Can't find an online version unfortunately
      </Card>
      <Card title="A Fake Artist Goes to NY" link="https://el-artista.herokuapp.com/">
        Might be taken down? <a href="https://github.com/kcgidw/fao" target="_blank" rel="noreferrer" class="link">Github</a>
      </Card>
      <Card title="Spyfall" link="https://www.spyfall.app/">
        
      </Card>
      <Card title="Codenames" link="https://codenames.game/">
      
      </Card>
      <Card title="Talking Games" link="U2FsdGVkX1+MY8vp8/0r6Ss5zQ4pI2zdFeOIEtZ9BS6DtHR99k9b3MnSFMZpkFrQPhL42+yRJ4q4zxk5w2mTzw==" encrypted>
        We're Not Really Strangers, Big Talk, 36 Questions, etc. Encrypted link due to copyright concerns.
      </Card>
      <Card title="Decrypto" link="https://netgames.io/games/enigma/">
        3-10 players
      </Card>
      <Card title="Love Letter" link="https://netgames.io/games/love-letter/">
        
      </Card>
    </CardGrid>

    <div class="h-8 lg:h-12"></div>
    <div class="text-body-container">
      <p>
        Also looking to try Werewords, Bang! The Dice Game, Letter Jam, Cross Talk, Floor Plan, or other miscellaneous roll and write games. Suggestions? <a href="mailto:nathan.r.wang@gmail.com" target="_blank" rel="noreferrer" class="link">Shoot me an email!</a>
      </p>
    </div>
  </div>
</div>