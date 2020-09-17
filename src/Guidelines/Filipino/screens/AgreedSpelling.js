import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Filipino" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out </p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Jollibee j o l l i b e e{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Person said "Jollibee" and then spelled it.
                  </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: www.jollibee.com.ph </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    w w w dot j o l l i b e e dot com dot p h{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_512}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : mga salitang nagsisimula sa letrang J{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ilang A meron sa salitang banana?{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : heh, ha, haha, hehe, boo hoo, lalala{' '}
                  </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: hahaha </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: hahahahaha </span>
                  <span className={styles.text_12}></span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>ha ha ha ha ha </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Do not transcribe more than three syllables.
                  </span>
                </p>
              </div>
              <div id="proper-names">
                {' '}
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_521}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: Juan Karlos Labajo </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : The celebrity spells his name differently than the more
                    common "Carlos".
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Kristin Chenoweth </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : The celebrity spells his name differently than the more
                    common "Christine".
                  </span>
                </p>
                <p className={styles.block_524}>
                  If proper names include diacritics uncommon in your language
                  (ü, ç, etc), do not include them in your spelling.
                </p>
                <p className={styles.block_525}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Laarni </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: Laarnie </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Searching "Laarni pangalan" (without quotation marks)
                    yields more results than "Laarnie pangalan".
                  </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: MacDonald </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: McDonald </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Searching "MacDonald pangalan" yields more search results
                    than "McDonald pangalan". Note that this example refers to
                    the surname, not the restaurant chain.
                  </span>
                </p>
                <p className={styles.block_529}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal difference" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Craiglist </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : The actual name is "Craigslist".{' '}
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : The actual name is "The Lord of the Rings".
                  </span>
                </p>
                <p className={styles.block_531}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google Search results. If no box
                  appears, defer to Wikipedia's formatting, and if there is no
                  Wikipedia article, use the most common format according to
                  Google Search results.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Kailan ang Eid al-Fitr ngayong taon?{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Merry Christmas and happy New Year.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Maligayang Bagong Taon!{' '}
                  </span>
                </p>
                <p className={styles.block_532}>
                  Capitalize words used as titles and names when they are used
                  that way.
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Magandang umaga Nanay.{' '}
                  </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Pinakilala niya ako sa kanyang kapatid na lalaki.
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_535}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Note that family words like "sister", "brother", and
                    "cousin" are generally not used as names or titles. Neither
                    are common terms of endearment (dude, bro, babe).
                  </span>
                </p>
                <p className={styles.block_536}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: YouTube </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Nagtatrabaho siya sa Amazon.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Nabalitaan ko na ang Yahoo at T-Mobile ay
                  </span>
                </p>
                <p className={styles.block_182}>nagkasundo na.</p>
                <p className={styles.block_181}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: craigslist </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: AAMCO </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Officially "AAMCO" and is based on an acronym.
                  </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: ampm </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Officially "ampm" and is pronounced as initialism.
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: eHarmony </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: UnitedHealthCare </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Officially camel case.{' '}
                  </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Burger King </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: BURGER KING </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: LEGO </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Lego </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Do not spell "Burger King" all in upper case as in the
                    stylized form of the logo, stick to the official form as per
                    the privacy policy.
                  </span>
                </p>
                <p className={styles.block_542}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Ok Google </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Ok Google Now </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ok Google, saan ang Manila Hotel?{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Okay lang sa akin Babes.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Okay Patty, tara na.</span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_544}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_545}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_546}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Patugtugin Ang Tipo Kong Lalake.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Patugtugin "Ang Tipo Kong Lalake".{' '}
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Patugtugin Eraserheads Ang Huling El{' '}
                  </span>
                </p>
                <p className={styles.block_262}>Bimbo.</p>
                <p className={styles.block_547}>
                  Transcribe all media titles with original punctuation. In
                  cases where original punctuation falls at the end of a
                  sentence, do not transcribe sentence-level punctuation. That
                  is, media title punctuation trumps sentence level punctuation
                  when in conflict. If a popular media title consists of an
                  entire sentence but the official spelling is without
                  punctuation, then don't punctuate the title. If an utterance
                  is ambiguous between a media title and a sentence or web
                  search, use your judgment for which is more likely and treat
                  it accordingly.
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Kapamilya, Deal or No Deal{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Nagustuhan ko Oh My G!{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Check which year Shall We Dance? came{' '}
                  </span>
                </p>
                <p className={styles.block_316}>out.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Sino ang bida sa in Dude, Where's My Car?
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ang paborito n gaming pamilya ay What{' '}
                  </span>
                </p>
                <p className={styles.block_549}>About Bob?</p>
                <p className={styles.block_550}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Transformers 2 </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Official title is "Transformers: Revenge of the Fallen".
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Official title is "The Fox (What Does the Fox Say?)".
                  </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Play The Next Generation.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Official title is "Star Trek: The Next Generation".
                  </span>
                </p>
                <p className={styles.block_554}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : YouTube Ibig kong malaman mo hanggang{' '}
                  </span>
                </p>
                <p className={styles.block_147}>
                  sa dulo ng mundo ang pangarap ko'y sa 'yo.
                </p>
                <p className={styles.block_178}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : YouTube Ibig kong malaman mo Hanggang{' '}
                  </span>
                </p>
                <p className={styles.block_555}>
                  sa dulo ng mundo Ang pangarap ko'y sa 'yo.
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_54}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you understand them.{' '}
                  </span>
                  <span className={styles.text_45}>C</span>
                  <span className={styles.text_46}>ORRECT</span>
                  <span className={styles.text_45}>: Livin' on a prayer </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: La Vie en Rose </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_558}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: the color gray </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: the colour grey </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: nukleus </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: nucleus </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Philippine English traditionally followed American English
                    spelling and grammar. "Gray" is preferred by Merriam-Webster
                    and "color" is American spelling.
                  </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : "Nukleus" is preferred by NCCA.
                  </span>
                </p>
                <p className={styles.block_562}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Pseudotsuga menziesii{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: E. coli </span>
                </p>
                <p className={styles.block_563}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Edi wow! </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Eh di wow. </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Pare tingnan mo yung Kano, ang lakas mag yosi.
                  </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>e di wow </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    pare tingnan mo yung kano ang lakas mag yosi{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_569}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sang daan na lang pera ko.{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Isang daan na lang pera ko.{' '}
                  </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Pa'no na to? </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Paano na to? </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Pa'no na ito? </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    sang daan na lang pera ko{' '}
                  </span>
                  <span className={styles.text_19}>" E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>pa'no na to </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_572}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Gangnam Style </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>gangdam style </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_573}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: tarbaho </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Speaker meant "trabaho" but interchanged letters.
                  </span>
                </p>
                <p className={styles.block_575}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Kaloli </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : User says "Kaloli". This might sound like nonsense at
                    first, but the transcriber guesses the
                  </span>
                </p>
                <p className={styles.block_577}>
                  spelling "kalolli" and is by corrected Google Search to
                </p>
                <p className={styles.block_578}>
                  "Kaloli", a gasoline tanker and place in Hawaii.
                </p>
                <p className={styles.block_579}>Transcribe Kaloli.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Souk Abdali </span>
                </p>
                <p className={styles.block_580}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: taggenbrope </span>
                </p>
                <p className={styles.block_581}>
                  {' '}
                  <span className={styles.text_2}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    instructed in: Longform generic rules &gt; Unintelligible or
                    foreign or singing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
