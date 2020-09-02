import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import styles from '../css/styles.module.css'
import Wrapper from '../Wrapper'

const GuidingPrinciplesUK_UA = () => {
  const classes = useStyles()
  const headingIds = [
    'difficult-utterance',
    'aggreed-spelling',
    'punctuation',
    'format',
  ]
  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Mandarin" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p className={'large-heading'}>
                Transcription guiding principles
              </p>
              <p className={'text'}>
                This document summarizes the guiding principles for certain
                types of phrases, that are transcribed in ways that conflict
                with standard grammar rules for transcription language. For
                language specific transcription, follow the language specific
                written domain convention.
              </p>
              <div id="difficult-utterance">
                <p className={'heading'}>Difficult utterances</p>
                <p className={'text'}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or different language varieties.
                </p>
                <p className={'bold-heading'}>Skipping a prompt</p>
                <p className={styles.block_5}>
                  If you can't understand part of the audio, transcribe only the
                  part you can understand. For the part you cannot understand,
                  create a separate speaker segment and add the Unintelligible
                  label.
                </p>
                <p className={styles.block_6}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
                <p className={'bold-heading'}>Hesitations and truncations</p>
                <p className={styles.block_8}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you know what the word is supposed to be,
                  transcribe the entire word. If you are not sure what the word
                  should be, do not transcribe the word at all. Do not put
                  punctuation after words that have been cut off.
                </p>
                <p className={styles.block_9}>
                  If a quotation is cut off in the middle, use an end quotation
                  mark anyway.
                </p>
                <p className={styles.block_10}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.
                </p>
                <p className={'bold-heading'}>Accents</p>
                <p className={styles.block_12}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling
                </p>
                <p className={styles.block_13}>Example Audio: where is dat</p>
                <p className={styles.block_14}>Correct: Where is that?</p>
              </div>
              <div id="aggreed-spelling">
                <p className={'heading'}>Agreed spelling</p>
                <p className={'text'}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.
                </p>
                <p className={'bold-heading'}>Spelling out</p>
                <p className={styles.block_18}>
                  If a word is spelled out, write it with spaces in between.
                  This rule does not apply to acronyms, URLs, or email
                  addresses.
                </p>
                <p className={styles.block_19}>
                  Example Audio: how do you get to c o s t c o
                </p>
                <p className={styles.block_20}>
                  Correct: How do you get to c o s t c o?
                </p>
                <p className={'bold-heading'}>Interjections</p>
                <p className={styles.block_22}>
                  Transcribe words representing laughter or other non speech
                  vocalizations. Some of these words might be:
                </p>
                <p className={styles.block_23}>
                  huh, woah, okay, yep, uh-huh, mhm, nah
                </p>
                <p className={styles.block_24}>
                  This list is not exhaustive of all true interjections.
                </p>
                <p className={styles.block_25}>
                  Annotate laughter that is included within speech.
                </p>
                <p className={'bold-heading'}>Proper names</p>
                <p className={styles.block_27}>
                  For proper names, always use the official spelling and
                  punctuation.
                </p>
                <p className={styles.block_28}>Example Audio: will i am</p>
                <p className={styles.block_29}>Correct: will.i.am</p>
                <p className={styles.block_30}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_31}>Example Audio: mcdonald</p>
                <p className={styles.block_32}>Correct: MacDonald</p>
                <p className={'bold-heading'}>Brand and product</p>
                <p className={styles.block_34}>
                  Format brand and company names as officially formatted
                </p>
                <p className={styles.block_35}>
                  Example Audio: the team is sponsored by united healthcare
                </p>
                <p className={styles.block_36}>
                  Correct: The team is sponsored by UnitedHealthcare.
                </p>
                <p className={'bold-heading'}>Media title</p>
                <p className={styles.block_38}>
                  Write media titles as they are most commonly written.
                </p>
                <p className={styles.block_39}>
                  Example Audio: screenshots of call of duty black ops two
                </p>
                <p className={styles.block_40}>
                  Correct: screenshots of Call of Duty: Black Ops 2
                </p>
                <p className={'bold-heading'}>Multiple spellings</p>
                <p className={styles.block_42}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech errors, speech impairment, etc.), transcribe
                  the intended word.
                </p>
                <p className={styles.block_43}>
                  Example Audio: where is the nearest liberry
                </p>
                <p className={styles.block_44}>
                  Correct: Where is the nearest library?
                </p>
                <p className={styles.block_45}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, prefixes, infixes or circumfixes, transcribe as is.
                </p>
                <p className={styles.block_46}>Correct: interpretate</p>
                <p className={styles.block_47}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first search
                  for the word in Google. If there is a clear candidate,
                  transcribe that word. If there is not a clear candidate, but
                  it is easy to spell and articulated clearly, transcribe it
                  anyway. If there is no clear candidate and it is not easy to
                  spell, create a separate speaker segment and add the
                  Unintelligible label.
                </p>
                <p className={styles.block_48}>Correct: Souk Abdali</p>
                <p className={styles.block_49}>
                  Explanation: User says Souk Abdali. Transcriber searches
                  “sukabdali”, finds correct results. Transcribe Souk Abdali.
                </p>
              </div>
              <div id="punctuation">
                <p className={'heading'}>Punctuation</p>
                <p className={'text'}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in this section.
                </p>
                <p className={'bold-heading'}>Fragments versus sentences</p>
                <p className={styles.block_53}>
                  Answers to questions and sentences with dropped subjects
                  should be transcribed with ending punctuation.
                </p>
                <p className={styles.block_54}>
                  Correct: Who are you talking about? The guy next door.
                </p>
                <p className={styles.block_55}>Explanation: two speakers</p>
                <p className={'bold-heading'}>Commas</p>
                <p className={styles.block_57}>
                  Only use commas if they are required according to language
                  grammar.
                </p>
                <p className={'bold-heading'}>Colon and quotation</p>
                <p className={styles.block_59}>
                  If a speaker is quoting another person, transcribe a comma
                  before the quoted speech.
                </p>
                <p className={styles.block_60}>
                  Example Audio: my friend said alligator crocodile
                </p>
                <p className={styles.block_61}>
                  Correct: My friend said, "alligator crocodile".
                </p>
                <p className={styles.block_62}>
                  If the quoted text is a complete sentence, transcribe ending
                  punctuation inside the quotation marks. In cases like these,
                  do not add an additional ending punctuation after the main
                  sentence.
                </p>
                <p className={styles.block_63}>
                  Example Audio: jane asked are we meeting at three o clock
                </p>
                <p className={styles.block_64}>
                  Correct: Jane asked, "Are we meeting at 3:00?"
                </p>
                <p className={styles.block_65}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_66}>
                  Correct: He just said the word zucchini.
                </p>
                <p className={'bold-heading'}>Other symbols</p>
                <p className={styles.block_68}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£₹+= %*&amp;-.;
                </p>
                <p className={styles.block_69}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_54}>
                  Example Audio: are you going to the saints bears game
                </p>
                <p className={styles.block_25}>
                  Correct: Are you going to the Saints-Bears game?
                </p>
                <p className={styles.block_54}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_70}>
                  Example Audio: rome london flight
                </p>
                <p className={styles.block_71}>Correct: Rome-London flight</p>
                <p className={'bold-heading'}>Spoken punctuation</p>
                <p className={styles.block_73}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                </p>
                <p className={styles.block_74}>
                  Example Audio: okay dot dot dot
                </p>
                <p className={styles.block_75}>
                  Correct: Okay {`{dot} {dot} {dot}`}
                </p>
              </div>
              <div id="format">
                <p className={'heading'}>Format</p>
                <p className={styles.block_77}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this section.
                </p>
                <p className={'bold-heading'}>Number</p>
                <p className={styles.block_79}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.
                </p>
                <p className={styles.block_80}>
                  Correct: I have six dogs and 12 parakeets.
                </p>
                <p className={styles.block_81}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes. Be careful not to
                  use pre-combined fractions like "1⁄4".
                </p>
                <p className={styles.block_82}>
                  Example Audio: in three fourths of a mile turn right
                </p>
                <p className={styles.block_83}>
                  Correct: In 3/4 of a mi, turn right.
                </p>
                <p className={styles.block_84}>
                  For mixed numbers in math expressions and units &amp;
                  measures, transcribe them using numerals.
                </p>
                <p className={styles.block_85}>
                  Example Audio: the koala weight twelve and a third pounds
                  yesterday
                </p>
                <p className={styles.block_86}>
                  Correct: The koala weighed 12 and 1/3 lb yesterday.
                </p>
                <p className={styles.block_87}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_88}>
                  Example Audio: twelve and a half pumpkin pies were made
                </p>
                <p className={styles.block_89}>
                  Correct: 12 and a half pumpkin pies were made.
                </p>
                <p className={styles.block_90}>
                  Transcribe percentages using numerals followed by the "%"
                  sign. In the unlikely case that you encounter a number of a
                  million or greater used as a percentage, spell it out.
                </p>
                <p className={styles.block_75}>
                  Example Audio: two percent milk
                </p>
                <p className={styles.block_91}>Correct: 2% milk</p>
                <p className={styles.block_92}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_93}>
                  Example Audio: king henry the eighth
                </p>
                <p className={styles.block_94}>Correct: King Henry VIII</p>
                <p className={styles.block_95}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_96}>
                  Example Audio: season three episode two
                </p>
                <p className={styles.block_97}>Correct: season 3 episode 2</p>
                <p className={styles.block_98}>
                  Transcribe phone numbers using the most common format(s) in
                  the transcription language.
                </p>
                <p className={styles.block_99}>
                  Transcribe phone numbers as you would write them down in their
                  natural groups. When applicable, the STD code should be
                  surrounded by spaces.
                </p>
                <p className={styles.block_100}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.
                </p>
                <p className={styles.block_101}>
                  Example Audio: five times six to the third
                </p>
                <p className={styles.block_102}>Correct: 5 / 6 ^ 3</p>

                <p className={'bold-heading'}>Currency and unit</p>
                <p className={styles.block_104}>
                  Transcribe currencies as commonly written in transcription
                  locale.
                </p>
                <p className={styles.block_105}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_106}>
                  Example Audio: my family bought ten liters of orange juice
                </p>
                <p className={styles.block_105}>
                  Correct: My family bought 10 L of orange juice.
                </p>
                <p className={styles.block_107}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_108}>
                  Example Audio: milk is two ninety nine
                </p>
                <p className={styles.block_109}>Correct: Milk is $2.99.</p>
                <p className={'bold-heading'}>Date and time</p>
                <p className={styles.block_111}>
                  Use the common form for transcribing dates and times as used
                  in transcription language.
                </p>
                <p className={styles.block_112}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_113}>
                  Example Audio: a few minutes after three
                </p>
                <p className={styles.block_83}>
                  Correct: a few minutes after 3:00
                </p>
                <p className={'bold-heading'}>Address</p>
                <p className={styles.block_115}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_116}>
                  Correct: 751 Jefferson Street, New York City
                </p>
                <p className={styles.block_117}>
                  Transcribe entities and locations by using a comma between
                  them "ENTITY, LOCATION"
                </p>
                <p className={styles.block_118}>
                  Correct: McDonald's, Castro Street
                </p>
                <p className={'bold-heading'}>Web</p>
                <p className={styles.block_120}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_121}>
                  Example Audio: im so hashtag hungry i could eat a whole pizza
                </p>
                <p className={styles.block_122}>
                  Correct: I'm so #hungry I could eat a whole pizza.
                </p>
                <p className={styles.block_123}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_124}>
                  Example Audio: h t t p colon backslash backslash mail dot
                  yahoo dot com
                </p>
                <p className={styles.block_125}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>http:\mail.yahoo.com </span>
                </p>
                <p className={styles.block_126}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_127}>
                  Example Audio: w w facebook dot com
                </p>
                <p className={styles.block_128}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.facebook.com </span>
                </p>
                <p className={styles.block_129}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_130}>
                  Example Audio: w w w dot t a r g e t dot c o m”
                </p>
                <p className={styles.block_131}>
                  <span className={styles.text_}>Correct: </span>
                  <span className={styles.text_1}>www.target.com </span>
                </p>
                <p className={'bold-heading'}>Abbreviation</p>
                <p className={styles.block_133}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_134}>
                  Correct: Warriors versus Lakers
                </p>
                <p className={styles.block_60}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_80}>
                  Correct: NASA, NASCAR, AAMCO, ZIP code
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Guiding Principles"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default GuidingPrinciplesUK_UA

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
