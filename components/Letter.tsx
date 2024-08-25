import React from 'react';
import Button from '../components/Button';
import Sidenote from './Sidenote';
import { useInView } from 'react-intersection-observer';

function Text({ children }: { children: React.ReactNode }) {
  return (
    <div className=' px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-1/2 py-10 flex flex-col gap-4'>
      {children}
    </div>
  );
}

export default function Letter() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger every time it comes into view
  });

  return (
    <div className='w-full flex flex-col justify-center items-center '>
      <section
        id='section1'
        className='w-full flex flex-col justify-center items-center'
      >
        <Text>
          <h3 className=''>
            <strong>Welcome.</strong>
          </h3>
          <p className=''>
            Starting in the early 2010s, a small group of{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.amazon.com/Great-Stagnation-Low-Hanging-Eventually-eSpecial-ebook/dp/B004H0M8QS'
            >
              economists
            </a>{' '}
            and{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.lesswrong.com/posts/Xqcorq5EyJBpZcCrN/thiel-on-progress-and-stagnation'
            >
              entrepreneurs
            </a>{' '}
            raised the “stagnation hypothesis”: that Western scientific,
            technological, and economic progress has slowed significantly in
            recent decades.
          </p>
          <p className=''>
            Dr. Robert Gordon’s{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.amazon.com/Rise-Fall-American-Growth-Princeton/dp/153661825X'
            >
              book
            </a>{' '}
            <em>The Rise and Fall of American Growth</em> observes that
            1870-1970 witnessed unprecedented improvements in people’s lives,
            driven by inventions like the electric grid, internal combustion
            engine and cars, all{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://penntoday.upenn.edu/news/how-appliance-boom-moved-more-women-workforce'
            >
              modern appliances
            </a>
            , an Agricultural Revolution, global peace secured by nuclear
            weapons, the rapid expansion of modern medicine, and more. The
            greatest inventions of recent decades—computers and the
            Internet—have advanced our species in transformative ways, but{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://wtfhappenedin1971.com/'
            >
              have
            </a>{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.brookings.edu/wp-content/uploads/2020/06/Productivity_Framing_LO_6.16_FINAL.pdf'
            >
              not
            </a>{' '}
            uplifted the average quality of life at the same scale as past
            innovations. Even science itself is showing{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.theatlantic.com/science/archive/2018/11/diminishing-returns-science/575665/'
            >
              diminishing returns
            </a>
            .
            <Sidenote right={false} id={3}>
              There are exceptions, like mRNA vaccines, but they are
              increasingly fewer-and-further-between.
            </Sidenote>
            <Sidenote right={true} id={4}>
              20th-century appliances vastly improved American life:{' '}
              <a href='https://press.princeton.edu/books/paperback/9780691175805/the-rise-and-fall-of-american-growth'>
                Rise and Fall of American Growth
              </a>{' '}
              | Data: Lebergott (1976), pp. 260-88.
            </Sidenote>
            <img className='' src='letter-conveniences.svg' />
            <br />
            We created Levers for Progress to play a small part in reversing
            this trend. While the importance of scientists, entrepreneurs, and
            capital for innovation is obvious, we highlight the pivotal role
            that public policy and state capacity can have as well. LfP is an
            open collection of <b>policies, tactics, and reforms</b> modern
            institutions have used to advance their scientific and technological
            output. Some have worked better than others, but we hope LfP will
            inspire more discussion on experimenting with similar interventions,
            faster and more often.
            <br />
            <br />
            We acknowledge the project’s title is a bit of a misnomer. Progress
            is{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://jamesclear.com/book-summaries/lessons-of-history#:~:text=If%20progress%20is%20real%2C%20it,larger%20portion%20of%20human%20heritage.'
            >
              real
            </a>{' '}
            but it’s certainly not concentrated only in beakers, labs, and
            factories. Carving a holistic definition of civilizational progress
            is a grand challenge, so we leave that undertaking to braver souls.
          </p>
          <p>
            We chose to focus on science and technology because, despite their
            measurable impact on quality of life, we do not fully appreciate or
            support their role in enabling lives of greater prosperity. Not in
            Washington, where{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.brookings.edu/articles/the-bold-vision-of-the-chips-and-science-act-isnt-getting-the-funding-it-needs/'
            >
              underfunded
            </a>{' '}
            government scientists are forced to work out of{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facilitiesnet.com/maintenanceoperations/tip/NIST-Facilities-Crumbling-Under-Maintenance-Backlog--51178'
            >
              crumbling
            </a>{' '}
            buildings. Not in education, where US students have{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.csis.org/blogs/perspectives-innovation/us-should-strengthen-stem-education-remain-globally-competitive#:~:text=The%20U.S.%20is%20falling%20behind%20in%20STEM%20proficiency%20compared%20to%20other%20leading%20countries'
            >
              underachieved
            </a>{' '}
            in STEM for decades. Not even in Silicon Valley, which tends to
            dismiss academia and government,{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://americancompass.org/myth-busting-silicon-valley/'
            >
              forgetting
            </a>{' '}
            its US military{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://americancompass.org/silicon-valleys-public-garages/'
            >
              roots
            </a>{' '}
            and that federally-funded{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.energy.gov/articles/75-breakthroughs-americas-national-laboratories-0'
            >
              research
            </a>{' '}
            underpins most technologies that power modern life.
          </p>
          <p>
            We lack appreciation because we falsely believe that progress{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.youtube.com/watch?v=GhljHahCick&ab_channel=MotivationStrikes'
            >
              “just happens”
            </a>
            . Some assume the universe has a{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://beff.substack.com/p/notes-on-eacc-principles-and-tenets'
            >
              natural will
            </a>{' '}
            that trends toward some technological singularity. Others believe
            innovation marches along a singular path whereby discoveries occur
            when they are destined to. Most just assume it is nothing more than
            a stochastic procedure. Predeterminism, indeterminism, and apathy
            are all equally destructive; history is neither inevitable nor
            random. To believe either is to remove human agency to act, to
            change, to mold the future.
          </p>

          <div className='flex justify-center'>
            <Button />
          </div>
        </Text>
        <div>
          <figure>
            <img className='hidden md:inline-block' src='/letter-moon.svg' />
            <img
              className='md:hidden inline-block px-5'
              src='letter-moon-sm.svg'
            />
          </figure>
          <p className='text-center mt-3'>
            <em>
              Apollo Missions{' '}
              <a href='https://www.nasa.gov/centers/marshall/history/this-week-in-nasa-history-apollo-16-launches-april-16-1972-1.html'>
                <em>16</em>
              </a>{' '}
              and{' '}
              <a href='https://www.nasa.gov/centers/marshall/history/images/this-week-in-nasa-history-apollo-17-lands-on-lunar-surface-dec-11-1972.html'>
                17
              </a>
              , the final times humans went to the moon.
            </em>
          </p>
        </div>
      </section>
      <section
        id='section2'
        className='w-full flex flex-col justify-center items-center '
      >
        <Text>
          <h3 className=''>
            <strong>The Rise and Fall of Technological Statecraft</strong>
          </h3>
          
          <p className=''>
            Fifteen years and a world war later, Vannevar Bush—Roosevelt and
            Truman’s chief science advisor—
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://archive.is/ezrwO#selection-1533.1-1533.455'
            >
              cautioned
            </a>{' '}
            against increasing specialization in science:
          </p>

        </Text>

        <Text>
          <p className=''>
            Cultural narratives about technology took a darker turn in the 1960s
            and 70s. Left-wing humanists{' '}
            <a href='https://www.bostonreview.net/articles/andrew-jewett-science-under-fire/#:~:text=increasingly%20argued%20that%20science%E2%80%99s%20cultural%20influence%20buttressed%20social%20inequalities%2C%20keeping%20favored%20groups%20in%20power%20and%20others%20down'>
              argued
            </a>{' '}
            that science’s influence masked social inequalities, favoring
            certain privileged groups while oppressing others. The emerging New
            Right{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.bostonreview.net/articles/andrew-jewett-science-under-fire/#:~:text=Christian%20Right%20focused%20on%20the%201960s.%20Proponents%20of%20each%20narrative%20have%20discerned%20a%20pervasive%20sense%20of%20moral%20aimlessness%20that%20they%20often%20linked%20to%20the%20cultural%20influence%20of%20science.'
            >
              saw
            </a>{' '}
            technology threatening traditional virtues and ways of living. Many
            of these critiques were justified, but the degree to which
            innovation was scapegoated was not. These overlapping revolts
            gradually dismantled technological ambition from politics, of
            science from the state.
            <br />
            <br />
            The final nail in the coffin came with the end of the Cold War. The
            fall of the Soviet Union, which had once “plunged America into
            spiritual depression” with Sputnik,{' '}
            <Sidenote id={7} right={true}>
              {' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://media.defense.gov/2017/Apr/05/2001727355/-1/-1/0/B_0098_ERICKSON_INTO_UNKNOWN_TOGETHER.PDF'
              >
                Source:
              </a>{' '}
              Senator Lyndon Johnson.
            </Sidenote>{' '}
            recast American R&amp;D from a positive-sum priority for external
            security to a zero-sum competition for domestic appropriations.{' '}
            <Sidenote id={8} right={false}>
              The SSC also suffered from poor management, cost overruns, and
              many scientists thought funding would be better spent elsewhere.
              To learn more, see this fantastic{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.youtube.com/watch?v=3xSUwgg1L4g'
              >
                3h documentary
              </a>
              . Regardless whether cancelling the SSC was the correct decision,
              we mention it to emphasize the dependence of American innovation
              on foreign adversaries. NASA and DARPA were also founded in direct
              response to Sputnik. Is it possible to a political story that
              motivates sacrifice, investment, and incredibly hard work towards
              the future, that is not intrinsically violent?
            </Sidenote>{' '}
            In response to the 1993{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.nybooks.com/articles/2012/05/10/crisis-big-science/'
            >
              termination
            </a>{' '}
            of the Superconducting Super Collider after Congress already
            invested $2 billion, Nobel Laureate Steven Weinberg lamented:
            <br />
            <br />
            <em>
              &quot; Spending for the SSC had become a target for a new class of
              Congressmen elected in 1992…they didn’t feel that much was at
              stake.
              <b>
                The Cold War was over, and discoveries at the SSC were not going
                to produce anything of immediate practical importance.
              </b>{' '}
              The Clinton administration decided that it could only support one
              large technological project in Texas, and it chose the Space
              Station.
            </em>{' '}
            <Sidenote id={9} right={true}>
              The F-35 fighter plane suffers from a similar incentive problem.
              The $1 trillion jet—the DoD&apos;s most expensive weapons program
              ever—has more than{' '}
              <a href='https://www.nytimes.com/2019/08/21/magazine/f35-joint-strike-fighter-program.html#:~:text=It%E2%80%99s%20no%20accident,criticize%20this%20program'>
                1,500
              </a>{' '}
              suppliers spread across every state, making it cancel-proof
              despite repeated cost overruns.
            </Sidenote>{' '}
            <em>
              {' '}
              <b>
                The Space Station had the great advantage that it cost about ten
                times more than the SSC,{' '}
              </b>{' '}
              so NASA could spread contracts for its development over many
              states. Perhaps if the SSC had cost more, it would not have been
              canceled.&quot;
            </em>
          </p>
        </Text>
        <div>
          <figure className='image'>
            <img className='hidden md:inline-block' src='/letter-ssc.svg' />

            <img
              className='md:hidden inline-block px-5'
              src='letter-ssc-sm.svg'
            />
          </figure>
          <p className='text-center mt-3'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://particle.physics.ucdavis.edu/john/'
            >
              <em>Source</em>
            </a>
            <em>: The SSC tunnel one year before it was canceled</em>
          </p>
        </div>
        <Text>
          <p className=''>
            Instead, the world’s flagship particle accelerator was built in
            Europe. Research fell out of fashion as a federal priority.
            Following Milton Friedman’s neoliberal doctrine, the government
            increasingly ceded{' '}
            <Sidenote id={10} right={false}>
              By no means are we blaming private markets, which are an
              incredibly powerful tool for innovation (e.g. AI progress). Our
              point is that the public and private sectors should be
              complementary to each other; either one dominating the other leads
              to poor outcomes.
            </Sidenote>{' '}
            technological inventions (and their supply chains) to the private
            sector and global markets. As H.W. Bush&apos;s economic advisor
            famously{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://americancompass.org/potato-chips-computer-chips-yes-there-is-a-difference/'
            >
              quipped
            </a>
            , &quot;computer chips, potato chips, what’s the difference?&quot;
            Industrial atrophy followed, with a nearly $60 billion trade surplus{' '}
            <Sidenote id={11} right={true}>
              Advanced Technology Products includes biotech, advanced materials
              and electronics, aerospace, weapons, nuclear, and others as
              defined by the{' '}
              <a href='https://www.census.gov/foreign-trade/reference/codes/atp/index.html'>
                US Census Bureau.
              </a>
            </Sidenote>{' '}
            of advanced technology products (2020 dollars) in 1992 turning into
            a deficit of $191 billion by 2020.{' '}
          </p>
        </Text>
      </section>
      <section
        id='section3'
        className='w-full flex flex-col justify-center items-center'
      >
        <Text>
          <h3 className=''>
            <strong>The Roots of Revival</strong>
          </h3>
          
        </Text>

      </section>
      <section
        id='section4'
        className='w-full flex flex-col justify-center items-center '
      >
        <Text>
          <h3 className=''>
            <strong>A Timely Collection</strong>
          </h3>
          <p className=''>
            Most existing scholarship about innovation resides in business
            school case studies. Their goal is limited to comprehension, to
            explain why one organization succeeded where others failed. Our goal
            is to take the next step—to help institutions assimilate the
            systemic factors that lead to outperformance in innovation. As
            Patrick Collison and Tyler Cowen{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.theatlantic.com/science/archive/2019/07/we-need-new-science-progress/594946/#:~:text=Organizations%20as%20varied,of%20human%20organizations'
            >
              call out
            </a>
            :
          </p>
          <blockquote className=''>
            <em>
              “Organizations as varied as Y Combinator, MIT’s Radiation Lab, and
              ARPA have astonishing track records in catalyzing progress far
              beyond their confines. These examples collectively indicate that{' '}
              <b>
                one of our highest priorities should be figuring out
                interventions that increase the efficacy, productivity, and
                innovative capacity of human organizations.”
              </b>
            </em>
          </blockquote>
          <p className=''>
            Through our work and reading, we’ve come across some deeply
            inspiring organizations, interventions, and principles. By
            aggregating these levers into an easily accessible directory, we
            hope institutions of all kinds—including federal and local
            governments, universities, funding agencies, philanthropies, and
            companies—can take inspiration and ingest them faster. Anyone who
            wishes to contribute a lever can do so on our{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/ansonyuu/levers'
            >
              Github
            </a>{' '}
            or{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://8fmdz3e9wad.typeform.com/to/Z1mOCaPD'
            >
              Typeform
            </a>
            .
            <br />
            <br />
            Let&apos;s get to work!
          </p>
          <blockquote className=''>
            <em>Where there is no vision, the people perish. —</em> Proverbs
            29:18.
          </blockquote>

          <p className='text-xs' id='credits'>
            Levers of Progress was co-created by{' '}
            <a href='https://www.ansonyu.me/'>Anson Yu</a> and{' '}
            <a href='https://www.kelv.me/'>Kelvin Yu</a>. We would like to
            especially thank our early contributors, who authored entries,
            provided invaluable feedback, and shared inspiring stories. They
            are:{' '}
            <a href='https://www.cos.io/team/brian-nosek'>Dr. Brian Nosek</a>,{' '}
            <a href='https://twitter.com/rSanti97'>Santi Ruiz</a>,{' '}
            <a href='https://www.elidourado.com/'>Eli Dourado</a>,{' '}
            <a href='https://twitter.com/SusannahGlickm1'>
              Dr. Susannah Glickman
            </a>
            , <a href='https://twitter.com/aramaswamis'>Ashwin Ramaswami</a>,{' '}
            <a href='https://www.linkedin.com/in/sosanya'>Sosa</a>,{' '}
            <a href='https://corinwagen.github.io/public/main/index.html'>
              Dr. Corin Wagen
            </a>
            ,{' '}
            <a href='https://www.csis.org/people/masao-dahlgren'>
              Masao Dahlgren
            </a>{' '}
            ,{' '}
            <a href='https://www.linkedin.com/in/charlesxjyang/'>
              Charles Yang
            </a>
            ,{' '}
            <a href='https://manhattan.institute/person/willy-chertman'>
              Dr. Willy Chertman
            </a>
            , <a href='https://www.linkedin.com/in/erinsm/'>Erin Smith</a>,{' '}
            <a href='https://michelle-fang.com/'>Michelle Fang</a>,{' '}
            <a href='https://www.linkedin.com/in/dcooke34'>Di Cooke</a>,{' '}
            <a href='https://jasonjinzhao.com/'>Jason Zhao</a>,{' '}
            <a href='https://twitter.com/a_nnawang'>Anna Wang</a>,{' '}
            <a href='https://www.linkedin.com/in/joelburke1/'>Joel Burke</a>,{' '}
            <a href='https://www.linkedin.com/in/alice-q-wu/'>Alice Wu</a>,{' '}
            <a href='https://maxlangenkamp.me/'>Max Langenkamp</a>,{' '}
            <a href='https://www.elidourado.com/'>Ben Reinhardt</a>,{' '}
            <a href='https://twitter.com/humford'>Henry Williams</a>,{' '}
            <a href='https://neilhacker.com/'>Neil Hacker</a>,{' '}
            <a href='https://twitter.com/jasminewsun'>Jasmine Sun</a>,{' '}
            <a href='https://jzhao.xyz/'>Jacky Zhao</a>,{' '}
            <a href='https://www.ajkourabi.com/'>AJ Kourabi</a>, and a number of
            unnamed individuals, anonymized at their request.
          </p>
        </Text>
      </section>
      <Button className='mb-32' />
    </div>
  );
}
