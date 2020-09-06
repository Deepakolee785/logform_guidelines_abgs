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
            <PageContentHeader currentPage="longform Turskish" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said
                </p>
                <p className={styles.block_785}>
                  (often done for foreign names or businesses, for example).
                </p>
                <p className={styles.block_786}>
                  Use lowercase letters for the spelled-out portion.
                </p>
                <p className={styles.block_787}>
                  This rule does not apply to acronyms or initialisms, or to
                  spelled-out web or email addresses.
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Costco c o s t c o </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Person said "costco" and then spelled it.
                  </span>
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ne demekmiş c o s t c o?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    ne demekmiş c o s t c o{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_790}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : İngilizcede i n g ve e d ile biten kelimeler{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    ingilizcede i n g ve e d ile biten{' '}
                  </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_12}>kelimeler </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : a b c d e f g ğ h ı i k l m n o ö p r s ş t u ü v y z
                  </span>
                </p>
                <p className={styles.block_792}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: spelled out alphabet </span>
                </p>
                <p className={styles.block_793}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: hepsiburada.com.tr </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    hepsiburada nokta com t r{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_794}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: ÖSS </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>ö s s </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_795}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: PTT </span>
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: FIFA </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Pronounced the word "FIFA".{' '}
                  </span>
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: NATO </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Pronounced the word "NATO".{' '}
                  </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: a a a </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Speaker says "üç kere a", or "a a a".{' '}
                  </span>
                </p>
                <p className={styles.block_799}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: e-posta </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>e posta </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_800}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: iPhone, ABD, TBMM </span>
                </p>
                <p className={styles.block_801}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_802}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : J ile başlayan kelimeler{' '}
                  </span>
                </p>
                <p className={styles.block_803}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: A'dan Z'ye </span>
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Mehmet'in M'si </span>
                </p>
                <p className={styles.block_805}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Mandal kelimesinde kaç tane A vardır?{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables,
                </p>
                <p className={styles.block_808}>but no more.</p>
                <p className={styles.block_809}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : heh, ha, haha, hahaha, hehe, hehehe, boo hoo, boo hoo hoo,
                    lalala
                  </span>
                </p>
                <p className={styles.block_810}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: hahaha </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>ha ha ha ha ha </span>
                  <span className={styles.text_7}>" </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and
                </p>
                <p className={styles.block_813}>
                  pay attention to the correct format.
                </p>
                <p className={styles.block_814}>
                  Official format and spelling of a proper name may supersede
                  the usual written transcription conventions detailed in this
                  document.
                </p>
                <p className={styles.block_815}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Aaaarrghh </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : the name of a Rock band.{' '}
                  </span>
                </p>
                <p className={styles.block_817}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: seksendört </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : the name of a music band{' '}
                  </span>
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Grup Gündoğarken </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : the name of a music band{' '}
                  </span>
                </p>
                <p className={styles.block_818}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling.
                </p>
                <p className={styles.block_819}>
                  If unsure, refer to news articles, official city or celebrity
                  websites, IMDb, Wikipedia,
                </p>
                <p className={styles.block_820}>
                  Google Maps, or knowledge cards (the answer box above the list
                  of Google Search results) in that order.
                </p>
                <p className={styles.block_821}>
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_822}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the
                </p>
                <p className={styles.block_823}>
                  spelling that yields the most Google search hits when you
                  search for the name followed by the word
                </p>
                <p className={styles.block_824}>
                  "name" (without quotation marks) (e.g. "Anna name").
                </p>
                <p className={styles.block_825}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Sophia'yı ara. </span>
                </p>
                <p className={styles.block_826}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Sofia'yı ara. </span>
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Searching "Sophia name" (without quotation marks) yields
                    more results than "Sofia name", even though searching
                    "Sofia" yields more results than "Sophia" because Sofia is
                    the capital of Bulgaria.
                  </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: MacDonald </span>
                </p>
                <p className={styles.block_829}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: McDonald </span>
                </p>
                <p className={styles.block_830}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Searching "MacDonald name" yields more search results than
                    "McDonald name". Note that this example refers to the
                    surname, not the restaurant chain.
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sophia MacDonald </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Search full names to see if they refer to
                  </span>
                </p>
                <p className={styles.block_831}>
                  a celebrity. If the full name does not belong to a celebrity,
                  use the most common spelling for each part of the name (e.g.
                  search "Sophia name" and "MacDonald name").
                </p>
                <p className={styles.block_832}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google
                </p>
                <p className={styles.block_833}>
                  Search results. If no box appears, defer to Wikipedia's
                  formatting, and if there is no Wikipedia article,
                </p>
                <p className={styles.block_834}>
                  use the most common format according to Google Search results.
                </p>
                <p className={styles.block_835}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Noel arifesi Avrupa'da her yer kapalı.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : In this example, the holiday is "Noel"{' '}
                  </span>
                </p>
                <p className={styles.block_836}>
                  (Christmas) and "arifesi" (eve) is a common noun and doesn't
                  designate any holiday on its own thus shouldn't be
                  capitalised.
                </p>
                <p className={styles.block_837}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Eid al-Fitr bu yıl ne zaman?{' '}
                  </span>
                </p>
                <p className={styles.block_838}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Hanuka Bayramı kutlu olsun!{' '}
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_840}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially
                </p>
                <p className={styles.block_841}>
                  official documents), if available, or the Wikipedia or IMDb
                  page. In cases of ambiguity, defer to their
                </p>
                <p className={styles.block_842}>
                  privacy policy. If no other sources, use top Google hits.
                </p>
                <p className={styles.block_843}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Abim Amazon'da çalışıyor.{' '}
                  </span>
                </p>
                <p className={styles.block_844}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Yahoo ve T-Mobile arasında anlaşma sağlandığını duydum.
                  </span>
                </p>
                <p className={styles.block_845}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Burger King ve Subway en sevdiğim iki yer.
                  </span>
                </p>
                <p className={styles.block_846}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: YouTube </span>
                </p>
                <p className={styles.block_847}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: IKEA </span>
                </p>
                <p className={styles.block_848}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: ASUS </span>
                </p>
                <p className={styles.block_849}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: adidas </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : the blending of the name and surname{' '}
                  </span>
                </p>
                <p className={styles.block_850}>
                  of the founder "Adolf Dassler".
                </p>
                <p className={styles.block_851}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: eHarmony </span>
                </p>
                <p className={styles.block_852}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : PlayStation oynamaya bayılıyorum.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: camel case </span>
                </p>
                <p className={styles.block_853}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Burger King </span>
                </p>
                <p className={styles.block_854}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: BURGER KING </span>
                </p>
                <p className={styles.block_855}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not spell "Burger King" all in upper case as in the
                    stylized form of the logo, stick to the official form as per
                    the privacy policy.
                  </span>
                </p>
                <p className={styles.block_856}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: LEGO </span>
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Lego </span>
                </p>
                <p className={styles.block_857}>
                  Follow the official spelling, check on Wikipédia or choose the
                  spelling yielding more results on Google search.
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Accessorize </span>
                </p>
                <p className={styles.block_858}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>adidas </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bambi </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Atasun Optik </span>
                </p>
                <p className={styles.block_860}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    United Colors of Benetton{' '}
                  </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Beymen Club </span>
                </p>
                <p className={styles.block_862}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bimeks </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>The Body Shop </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Boyner </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bershka </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Beta </span>
                </p>
                <p className={styles.block_865}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bun Design </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Claire's </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Colin's </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Çilek Mobilya </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>D&amp;R </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Divarese </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dockers </span>
                </p>
                <p className={styles.block_869}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Domino's Pizza </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>D'S Damat </span>
                </p>
                <p className={styles.block_870}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>English Home </span>
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Enplus </span>
                </p>
                <p className={styles.block_872}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Erol Saat </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Esse </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Etstur </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Fenerium </span>
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>FLO </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Flormar </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>GözGrup </span>
                </p>
                <p className={styles.block_877}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Gratis </span>
                </p>
                <p className={styles.block_878}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Galatasaray Store </span>
                </p>
                <p className={styles.block_879}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Gusto </span>
                </p>
                <p className={styles.block_880}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Gülaylar </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>HD İskender </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>KFC </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hisar </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hotiç </span>
                </p>
                <p className={styles.block_883}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>İnci </span>
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>İnkılâp Kitabevi </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ipekyol </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Twist </span>
                </p>
                <p className={styles.block_885}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>BMW </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kemal Tanca </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kiğılı </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Köfteci Ramiz </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>KRC Mobilya </span>
                </p>
                <p className={styles.block_865}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kumpir Box </span>
                </p>
                <p className={styles.block_888}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>C&amp;A </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kuz Optik </span>
                </p>
                <p className={styles.block_890}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kütahya Porselen </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>H&amp;M </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Lacoste </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>LC Waikiki </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Levi's </span>
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mango </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Madame Coco </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Malatya Pazarı </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Marks and Spencer </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Marmaris Büfe </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Matmazel </span>
                </p>
                <p className={styles.block_893}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mavi </span>
                </p>
                <p className={styles.block_858}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Migros </span>
                </p>
                <p className={styles.block_894}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>BİM </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Citroën </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mothercare </span>
                </p>
                <p className={styles.block_896}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>NetWork </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Nike </span>
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Nine West </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Coca-Cola </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Fanta </span>
                </p>
                <p className={styles.block_898}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Sprite </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ParkBravo </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Penti </span>
                </p>
                <p className={styles.block_899}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Polo Garage </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Robert's Coffee </span>
                </p>
                <p className={styles.block_900}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Rossmann </span>
                </p>
                <p className={styles.block_901}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Sarar </span>
                </p>
                <p className={styles.block_902}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Decathlon </span>
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Sevil Parfümeri </span>
                </p>
                <p className={styles.block_896}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Siemens </span>
                </p>
                <p className={styles.block_903}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Silk and Cashmere </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Simit Sarayı </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>So CHIC... </span>
                </p>
                <p className={styles.block_905}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Starbucks Coffee </span>
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dolce&amp;Gabbana </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Step Halı </span>
                </p>
                <p className={styles.block_907}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Sultanahmet Köftecisi </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Süvari </span>
                </p>
                <p className={styles.block_862}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Swatch </span>
                </p>
                <p className={styles.block_858}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Tchibo </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TeknoSA </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Tobacco Shop </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Esso </span>
                </p>
                <p className={styles.block_896}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Watsons </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yargıcı </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yataş </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yves Rocher </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Zara </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Zen Diamond </span>
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Koçtaş </span>
                </p>
                <p className={styles.block_909}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Paşabahçe </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Tepe Home </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Tekzen </span>
                </p>
                <p className={styles.block_911}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Gold Bilgisayar </span>
                </p>
                <p className={styles.block_912}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>CarrefourSA </span>
                </p>
                <p className={styles.block_894}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Şok </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kipa </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bauhaus </span>
                </p>
                <p className={styles.block_885}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>A101 </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Real Hipermarket </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kipa </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kiler </span>
                </p>
                <p className={styles.block_914}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Oriflame </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>AVON </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Arçelik </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mudo </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Galaxy Note 2 </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Galaxy Trend </span>
                </p>
                <p className={styles.block_915}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Vestel </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bosch </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Beko </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Korkmaz </span>
                </p>
                <p className={styles.block_916}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Altınbaş </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Deichmann </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>NIVEA </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Google Earth </span>
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Google Images </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Google Maps </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Google Now </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Google Play </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Google Translate </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Cacharel </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Atasay Kuyumculuk </span>
                </p>
                <p className={styles.block_917}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>YKM </span>
                </p>
                <p className={styles.block_918}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Çetinkaya </span>
                </p>
                <p className={styles.block_919}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>DeFacto </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>DiaSA </span>
                </p>
                <p className={styles.block_920}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Doğtaş Mobilya </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Koton </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hugo Boss </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Linens </span>
                </p>
                <p className={styles.block_922}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Media Markt </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Metro </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>iPad </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>iPhone </span>
                </p>
                <p className={styles.block_918}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>iPhone 5s </span>
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>iPod </span>
                </p>
                <p className={styles.block_923}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>iPod touch </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>H&amp;M </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Özdilek </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Pierre Cardin </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Praktiker </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Saat ve Saat </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Toyzz Shop </span>
                </p>
                <p className={styles.block_899}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Üçler Market </span>
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Akpınarlar Kuruyemiş </span>
                </p>
                <p className={styles.block_926}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Sevinç Nakliyat </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Karizma Triko </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Atasay Kuyumculuk </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Üçerler Giyim </span>
                </p>
                <p className={styles.block_927}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Leylek Havada Turizm </span>
                </p>
                <p className={styles.block_928}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Enderler Mağazası </span>
                </p>
                <p className={styles.block_929}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Has Kadınlar Hamamı </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Şeker Fabrikası </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Firuze Bujiteri </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bernardo </span>
                </p>
                <p className={styles.block_930}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>L'Oréal </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Oral-B </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dove </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Colgate </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dalin </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Garnier </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Golden Rose </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Gillette </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>IMDb </span>
                </p>
                <p className={styles.block_931}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Lancome </span>
                </p>
                <p className={styles.block_932}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MAC Cosmetics </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Michael Kors </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>LEGO </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Neutrogena </span>
                </p>
                <p className={styles.block_885}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Orkid </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Vakko </span>
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>LG </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Veet </span>
                </p>
                <p className={styles.block_934}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Maybelline New York </span>
                </p>
                <p className={styles.block_915}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Pastel </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Signal </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>edIn </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>İpana </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Duru </span>
                </p>
                <p className={styles.block_935}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kotex </span>
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Sensodyne </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Molped </span>
                </p>
                <p className={styles.block_937}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>McDonald's </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Burger King </span>
                </p>
                <p className={styles.block_932}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Garanti Bankası </span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Türkiye İş Bankası </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yapı Kredi </span>
                </p>
                <p className={styles.block_938}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Türkiye Halk Bankası </span>
                </p>
                <p className={styles.block_931}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Halkbank </span>
                </p>
                <p className={styles.block_939}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Citibank </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>DenizBank </span>
                </p>
                <p className={styles.block_937}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Finansbank </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>HSBC Bank </span>
                </p>
                <p className={styles.block_940}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ING Bank </span>
                </p>
                <p className={styles.block_872}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Microsoft </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Fibabanka </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Şekerbank </span>
                </p>
                <p className={styles.block_941}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Türk Ekonomi Bankası </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Albaraka </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bank Asya </span>
                </p>
                <p className={styles.block_942}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    Kuveyt Türk Katılım Bankası{' '}
                  </span>
                </p>
                <p className={styles.block_943}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    Türkiye Finans Katılım Bankası{' '}
                  </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ziraat Bankası </span>
                </p>
                <p className={styles.block_944}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>VakıfBank </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>İller Bankası </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Audi A1 </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Audi R8 </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Renault </span>
                </p>
                <p className={styles.block_880}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Peugeot </span>
                </p>
                <p className={styles.block_888}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ford </span>
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Toyota </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dacia </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Volkswagen </span>
                </p>
                <p className={styles.block_946}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mercedes-Benz </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MINI Cooper </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hyundai </span>
                </p>
                <p className={styles.block_947}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Fiat </span>
                </p>
                <p className={styles.block_948}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Opel </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Nespresso </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Nestlé </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ok Glass </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ok Google </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Omegle </span>
                </p>
                <p className={styles.block_949}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>OpenOffice </span>
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Play Store </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Playmobil </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>PlayStation </span>
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Türk Telekom </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Petrol Ofisi </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Shell </span>
                </p>
                <p className={styles.block_877}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>OPET </span>
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>BP </span>
                </p>
                <p className={styles.block_951}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Total Oil Türkiye </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Akpet </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Lukoil </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>PayPal </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Café Crown </span>
                </p>
                <p className={styles.block_858}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Philips </span>
                </p>
                <p className={styles.block_952}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Hilton </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Photoshop </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Pac-Man </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Myspace </span>
                </p>
                <p className={styles.block_885}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Wi-Fi </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Four Seasons Hotel </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Rixos </span>
                </p>
                <p className={styles.block_870}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mercure Hotel </span>
                </p>
                <p className={styles.block_920}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ramada Hotels </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung 4K </span>
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Apps </span>
                </p>
                <p className={styles.block_953}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Galaxy Ace 2 </span>
                </p>
                <p className={styles.block_634}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Galaxy Note II </span>
                </p>
                <p className={styles.block_954}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    Samsung Galaxy Note III{' '}
                  </span>
                </p>
                <p className={styles.block_955}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Galaxy S III </span>
                </p>
                <p className={styles.block_956}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Galaxy S4 </span>
                </p>
                <p className={styles.block_860}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Galaxy S4 Free </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samsung Tab 3 </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>SKODA </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Tupperware </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Gloria Jean's </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MADO </span>
                </p>
                <p className={styles.block_957}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass",
                </p>
                <p className={styles.block_958}>
                  require their own particular spelling of "okay". This spelling
                  is unique to these cases.
                </p>
                <p className={styles.block_959}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ok Google </span>
                </p>
                <p className={styles.block_960}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ok Google Now </span>
                </p>
                <p className={styles.block_961}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, Starbucks nerede?{' '}
                  </span>
                </p>
                <p className={styles.block_962}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, en iyi arabalar{' '}
                  </span>
                </p>
                <p className={styles.block_963}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: OK. </span>
                </p>
                <p className={styles.block_964}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: OK, Selma. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : This is not an Ok Google voice{' '}
                  </span>
                </p>
                <p className={styles.block_965}>
                  command, so spell it with an uppercase K.
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : OK Pelin, hadi gidelim.{' '}
                  </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available.
                </p>
                <p className={styles.block_969}>
                  If an utterance is ambiguous between a media title and a
                  sentence or web search, use your judgment for
                </p>
                <p className={styles.block_970}>
                  which is more likely; if truly unclear, default to media
                  title.
                </p>
                <p className={styles.block_971}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_972}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_973}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Eşkıya </span>
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Dedemin İnsanları izle.{' '}
                  </span>
                </p>
                <p className={styles.block_974}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Rihanna Diamonds dinle.{' '}
                  </span>
                </p>
                <p className={styles.block_975}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Kış Uykusu </span>
                </p>
                <p className={styles.block_976}>
                  Follow the spelling of the original titles checking on
                  official websites
                </p>
                <p className={styles.block_977}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>FOX TV </span>
                </p>
                <p className={styles.block_978}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT 1 </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT1 </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Haber </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT 3 </span>
                </p>
                <p className={styles.block_940}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Spor </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Çocuk </span>
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Kurdî </span>
                </p>
                <p className={styles.block_918}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Avaz </span>
                </p>
                <p className={styles.block_979}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Türk </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Belgesel </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Müzik </span>
                </p>
                <p className={styles.block_939}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT HD </span>
                </p>
                <p className={styles.block_899}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Diyanet </span>
                </p>
                <p className={styles.block_979}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Okul </span>
                </p>
                <p className={styles.block_980}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TV8 </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Show TV </span>
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>atv </span>
                </p>
                <p className={styles.block_918}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>CNN Türk </span>
                </p>
                <p className={styles.block_980}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TV2 </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kanal D </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Habertürk </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kanal 7 </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ülke TV </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samanyolu TV </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>A Haber </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Star TV </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>NTV </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>CNBC-e Finans </span>
                </p>
                <p className={styles.block_880}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>CNBC-e </span>
                </p>
                <p className={styles.block_981}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>NTV Spor </span>
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>NTV Spor Smart </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kral TV </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kral Pop TV </span>
                </p>
                <p className={styles.block_982}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>e2 </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Cine5 </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Al Jazeera Turk </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kanaltürk </span>
                </p>
                <p className={styles.block_983}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bugün TV </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bloomberg HT </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>euronews </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Mehtap TV </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yumurcak TV </span>
                </p>
                <p className={styles.block_984}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Action HD </span>
                </p>
                <p className={styles.block_985}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Premier HD </span>
                </p>
                <p className={styles.block_986}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Stars HD </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Festival HD </span>
                </p>
                <p className={styles.block_987}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Comedy HD </span>
                </p>
                <p className={styles.block_988}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Family HD </span>
                </p>
                <p className={styles.block_989}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Sci-Fi HD </span>
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Drama HD </span>
                </p>
                <p className={styles.block_987}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Moviemax Comedy HD </span>
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Turkmax Gurme </span>
                </p>
                <p className={styles.block_990}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>İZ TV </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Lig TV </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Lig TV 2 </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Lig TV 3 </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Beyaz TV </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Flash TV </span>
                </p>
                <p className={styles.block_991}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TVNET </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TGRT Haber </span>
                </p>
                <p className={styles.block_992}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Samanyolu Haber </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kanal A </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Kanal B </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Halk TV </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Irmak TV </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Eurosport </span>
                </p>
                <p className={styles.block_993}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>BJK TV </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>GS TV </span>
                </p>
                <p className={styles.block_859}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>FB TV </span>
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>A Spor </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Powertürk TV </span>
                </p>
                <p className={styles.block_944}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dream TV </span>
                </p>
                <p className={styles.block_940}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Power TV </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Digiturk </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>D-Smart </span>
                </p>
                <p className={styles.block_994}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Premium HD </span>
                </p>
                <p className={styles.block_995}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    MovieSmart Premium 2 HD{' '}
                  </span>
                </p>
                <p className={styles.block_996}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Platin HD </span>
                </p>
                <p className={styles.block_938}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Gold HD </span>
                </p>
                <p className={styles.block_941}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Action HD </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Fest HD </span>
                </p>
                <p className={styles.block_997}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Family HD </span>
                </p>
                <p className={styles.block_998}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Classic HD </span>
                </p>
                <p className={styles.block_934}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MovieSmart Türk HD </span>
                </p>
                <p className={styles.block_989}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dizi Smart Platin HD </span>
                </p>
                <p className={styles.block_999}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dizi Smart Premium HD </span>
                </p>
                <p className={styles.block_1000}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>MaxSmart Premium HD </span>
                </p>
                <p className={styles.block_1001}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ulusal Kanal </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Radyo 1 </span>
                </p>
                <p className={styles.block_939}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT FM </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Radyo 3 </span>
                </p>
                <p className={styles.block_880}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Radyo 4 </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Türkü </span>
                </p>
                <p className={styles.block_1002}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Radyo Haber </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>TRT Avrupa FM </span>
                </p>
                <p className={styles.block_896}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Radyo D </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Radyo Tatlıses </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Açık Radyo </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Alem FM </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Show Radyo </span>
                </p>
                <p className={styles.block_1003}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Polis Radyosu </span>
                </p>
                <p className={styles.block_949}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Radyo Viva </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Best FM </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Süper FM </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Joy FM </span>
                </p>
                <p className={styles.block_1004}>
                  Transcribe all media titles with original punctuation. In
                  cases where original punctuation falls at the end of a
                  sentence, do not transcribe sentence-level punctuation. That
                  is, media title punctuation trumps sentence
                </p>
                <p className={styles.block_1005}>
                  level punctuation when in conflict. If a popular media title
                  consists of an entire sentence but the official
                </p>
                <p className={styles.block_1006}>
                  spelling is without punctuation, then don't punctuate the
                  title. If an utterance is ambiguous between a media
                </p>
                <p className={styles.block_1007}>
                  title and a sentence or web search, use your judgment for
                  which is more likely and treat it accordingly.
                </p>
                <p className={styles.block_1008}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Kim Milyoner Olmak İster? hangi günlerde yayında olduğuna
                    bak.
                  </span>
                </p>
                <p className={styles.block_1009}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ne zaman yayında, Fatmagül'ün Suçu Ne?{' '}
                  </span>
                </p>
                <p className={styles.block_1010}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : En sevdiğim dizi Aramızda Kalsın.{' '}
                  </span>
                </p>
                <p className={styles.block_1011}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_1012}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Transformers 2 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : for "Transformers: Revenge of the{' '}
                  </span>
                </p>
                <p className={styles.block_1013}>Fallen"</p>
                <p className={styles.block_1014}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Star Wars 3. Sezon </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : for "Star Wars 3.Sezon: Sith'in İntikamı"
                  </span>
                </p>
                <p className={styles.block_1015}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : for "The Fox (What Does the Fox Say?)"{' '}
                  </span>
                </p>
                <p className={styles.block_1016}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Kurtlar Vadisi izle. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Correct title is "Kurtlar Vadisi: Pusu".
                  </span>
                </p>
                <p className={styles.block_1017}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Taylor Swift Trouble dinlemek istiyorum.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Correct title is "I Knew You Were{' '}
                  </span>
                </p>
                <p className={styles.block_1018}>Trouble".</p>
                <p className={styles.block_1019}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : İbrahim Tatlıses Selam indir.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Correct title is "Selam Olsun".{' '}
                  </span>
                </p>
                <p className={styles.block_1020}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics.
                </p>
                <p className={styles.block_1021}>
                  Format lyrics that form a sentence as you would a normal
                  sentence.
                </p>
                <p className={styles.block_1022}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : YouTube We are the champions my friends, and we'll keep on
                    fighting till the end.
                  </span>
                </p>
                <p className={styles.block_1023}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : YouTube We Are the Champions my friends, and we'll keep on
                    fighting till the end.
                  </span>
                </p>
                <p className={styles.block_1024}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : YouTube We Are the Champions My Friends And We'll Keep on
                    Fighting till the End.
                  </span>
                </p>
                <p className={styles.block_1025}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : They are quoting lyrics that just happen to contain the
                    title; format as full sentence.
                  </span>
                </p>
                <p className={styles.block_1026}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : ground control to Major Tom{' '}
                  </span>
                </p>
                <p className={styles.block_1027}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_1028}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Y Tu Mama También </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_1031}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Pseudotsuga menziesii{' '}
                  </span>
                </p>
                <p className={styles.block_848}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: E. coli </span>
                </p>
                <p className={styles.block_1032}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Metronidazole </span>
                </p>
                <p className={styles.block_1033}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page.
                </p>
                <p className={styles.block_1034}>
                  Do not alter non-standard speech that the speaker probably
                  wouldn't want corrected.
                </p>
                <p className={styles.block_1035}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Valla billa çok ciks olmuşsun.{' '}
                  </span>
                </p>
                <p className={styles.block_1036}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Naber adaş? </span>
                </p>
                <p className={styles.block_1037}>
                  For the following words, use these spellings:
                </p>
                <p className={styles.block_1038}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>gari </span>
                </p>
                <p className={styles.block_1039}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>gacı </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>kokona </span>
                </p>
                <p className={styles.block_883}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>çüş </span>
                </p>
                <p className={styles.block_915}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>moruk </span>
                </p>
                <p className={styles.block_1040}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>mari </span>
                </p>
                <p className={styles.block_947}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>oha </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>valla </span>
                </p>
                <p className={styles.block_930}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>vallaha </span>
                </p>
                <p className={styles.block_1041}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>billa </span>
                </p>
                <p className={styles.block_1042}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ciks </span>
                </p>
                <p className={styles.block_1043}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>tırt </span>
                </p>
                <p className={styles.block_1044}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>tın </span>
                </p>
                <p className={styles.block_1045}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>fifi </span>
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>emo </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>dank </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>harbi </span>
                </p>
                <p className={styles.block_1046}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>harbiden </span>
                </p>
                <p className={styles.block_1047}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>la </span>
                </p>
                <p className={styles.block_1048}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_5}>lan </span>
                  <span className={styles.text_21}>
                    <sub className={styles.calibre2}>
                      Write commonly accepted contractions as usual. Transcribe
                      contractions when you hear them spoken.
                    </sub>
                  </span>
                </p>
                <p className={styles.block_1049}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Mümtaz'er Türköne kimdir?{' '}
                  </span>
                </p>
                <p className={styles.block_1050}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ne habersin? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Speaker clearly said two distinct{' '}
                  </span>
                </p>
                <p className={styles.block_1051}>words.</p>
                <p className={styles.block_1052}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : N'olur N'olmaz Sigortası{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : This is the original spellings of an{' '}
                  </span>
                </p>
                <p className={styles.block_1053}>insurance name.</p>
                <p className={styles.block_1054}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ne olur ne olmaz sigorta yaptır.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Speaker clearly said two distinct{' '}
                  </span>
                </p>
                <p className={styles.block_1055}>words.</p>
                <p className={styles.block_1056}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech,
                </p>
                <p className={styles.block_1057}>
                  like "yapacağım", "gideceğim" for "yapcam", "gitcem".
                </p>
                <p className={styles.block_1058}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Okula gideceğim. </span>
                </p>
                <p className={styles.block_1059}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Okula gitcem. </span>
                </p>
                <p className={styles.block_1060}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>okula gitcem </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1061}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Yemek yapacağım. </span>
                </p>
                <p className={styles.block_1062}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Yemek yapcam. </span>
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>yemek yapcam </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1063}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_1064}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Yarına ne yapıp ne edip yanına geleceğim.
                  </span>
                </p>
                <p className={styles.block_1065}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    yarına napıp nedip yanına geleceğim{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1066}>
                  If you hear a word that does not sound like a standard word of
                  your language because
                </p>
                <p className={styles.block_1067}>
                  there is a small sound change (i.e. accent, speech error,
                  speech impairment, etc),
                </p>
                <p className={styles.block_1068}>
                  transcribe the intended word.
                </p>
                <p className={styles.block_1069}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Gangnam Style </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>gangdam style </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_1070}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: güzelim </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>güselim </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_1071}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Kendisinin en sevdiği şeydir yalan söylemek.
                  </span>
                </p>
                <p className={styles.block_1072}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>kerdisinin </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1073}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Türkan Şoray çok iyi oyuncudur.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>türkan şorey çok iyi </span>
                </p>
                <p className={styles.block_1074}>
                  <span className={styles.text_12}>oyuncudur </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1075}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Thank you </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Person said "sank you" in French{' '}
                  </span>
                </p>
                <p className={styles.block_1076}>accent.</p>
                <p className={styles.block_1077}>
                  If you hear a word that does not sound like a standard word of
                  your language,
                </p>
                <p className={styles.block_1078}>
                  but it is obviously based on real words, suffixes, or
                  prefixes, transcribe as is.
                </p>
                <p className={styles.block_1079}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: yavaşın </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Even if they meant "yavaş olun".{' '}
                  </span>
                </p>
                <p className={styles.block_1080}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Dönpir olsa da yesek.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Unsure whether speaker intended to say "kumpir" or
                    "döner", but clearly articulated and easy to spell.
                  </span>
                </p>
                <p className={styles.block_1081}>
                  If you hear a word that does not sound like a standard word of
                  your language because
                </p>
                <p className={styles.block_1082}>
                  it appears to be nonsense, first perform a Google search for
                  the word. If there is a clear candidate,
                </p>
                <p className={styles.block_1083}>transcribe that word.</p>
                <p className={styles.block_1084}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Jü sosu en sevdiğim. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : User says "Jü". This might sound{' '}
                  </span>
                </p>
                <p className={styles.block_1085}>
                  like nonsense at first, but the transcriber guesses the
                  spelling "jüğ sosu" and is by corrected Google Search to "jü
                  sosu", a type of sauce. Transcribe Jü.
                </p>
                <p className={styles.block_1086}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sobsan Remzi </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : User says "Sobsan Remzi".{' '}
                  </span>
                </p>
                <p className={styles.block_1087}>
                  Transcriber searches "sopzan remzi", finds correct results.
                  Transcribe Sobsan Remzi.
                </p>
                <p className={styles.block_1088}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is
                </p>
                <p className={styles.block_1089}>
                  easy to spell and articulated clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1090}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: gatmenlik </span>
                </p>
                <p className={styles.block_1091}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in:
                </p>
                <p className={styles.block_1092}>
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing
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
