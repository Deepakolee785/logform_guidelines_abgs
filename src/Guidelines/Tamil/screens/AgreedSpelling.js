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
            <PageContentHeader currentPage="longform Tamil" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                This section covers spelling conventions for things such as
                proper names, media titles, acronyms, slang words, and more.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled out, write it with spaces in between.
                  This rule does not apply to acronyms, URLs or email addresses.
                </p>
                <p className={styles.block_967}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: வசாயம வ சா ய ம </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>வசாயம வ சா ய ம </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_968}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : " வசாயம" அ ட உசசரிககபபடட .{' '}
                  </span>
                </p>
                <p className={styles.block_969}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ </span>
                </p>
                <p className={styles.block_970}>
                  <span className={styles.text_5}>ஔ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_971}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : த ழ உ ெர த உ ர உசசரிககபபடட .{' '}
                  </span>
                </p>
                <p className={styles.block_972}>
                  Transcribe all acronyms and initialisms with no spaces. Do not
                  include periods between letters.
                </p>
                <p className={styles.block_973}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: தமக </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>த ம க </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_974}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>: "தமக" எனப ஒ </span>
                </p>
                <p className={styles.block_975}>தெல த ச.</p>
                <p className={styles.block_976}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அ க </span>
                </p>
                <p className={styles.block_977}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: அ. . .க. </span>
                </p>
                <p className={styles.block_978}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அரிைவ </span>
                </p>
                <p className={styles.block_979}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: அ.ரி.ைவ. </span>
                </p>
                <p className={styles.block_980}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அரிமா </span>
                </p>
                <p className={styles.block_981}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: அ.ரி.மா. </span>
                </p>
                <p className={styles.block_982}>
                  If you are unsure whether a word should be written with a
                  hyphen, check the Oxford Tamil Dictionary for the official
                  spelling.
                </p>
                <p className={styles.block_983}>
                  Single letters should be transcribed without quotes. Plural
                  letters should be transcribed with the proper plural marker.
                </p>
                <p className={styles.block_984}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : words that start with வ{' '}
                  </span>
                </p>
                <p className={styles.block_985}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : words that start with "வ"{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  If the speaker uses words representing laughter, crying,
                  singing, etc. transcribe them up to three syllables. Do not
                  transcribe actual laughter.
                </p>
                <p className={styles.block_988}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ஹாஹாஹா </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஹா ஹா ஹா ஹா ஹா </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_989}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even if the speaker says "ஹா" five times, only transcribe
                    three "ஹா" with no spaces.
                  </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  If you're not sure about the spelling for certain celebrity or
                  band names or for names with unique formatting, look it up.
                  For Tamil names, use the Tamil Wikipedia, for names in other
                  languages, use that country's Wikipedia.
                </p>
                <p className={styles.block_992}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஏ. ஆர. ர மான </span>
                </p>
                <p className={styles.block_993}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ஏ ஆர ர மான </span>
                </p>
                <p className={styles.block_994}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: பெகாப த ழா </span>
                </p>
                <p className={styles.block_995}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: பெகாப த ழர </span>
                </p>
                <p className={styles.block_996}>
                  If a personal name could have multiple spellings, use the
                  spelling that has the most Google search hits when you search
                  for the name followed by the word "ெபயர" (e.g. " மரன ெபயர").
                </p>
                <p className={styles.block_997}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ரஙகசா </span>
                </p>
                <p className={styles.block_998}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: அரஙகசா </span>
                </p>
                <p className={styles.block_999}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Searching "ரஙகசா ெபயர" (without quotation marks) yields
                    more results than "அரஙகசா ெபயர".
                  </span>
                </p>
                <p className={styles.block_1000}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: சஞசனா </span>
                </p>
                <p className={styles.block_1001}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: சஞஜனா </span>
                </p>
                <p className={styles.block_1002}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Searching "சஞசனா ெபயர" (without quotation marks) yields
                    more results than "சஞஜனா ெபயர".
                  </span>
                </p>
                <p className={styles.block_1003}>
                  If a speaker makes a small mistake in a proper name,
                  transcribe it anyway as long as the difference is minimal.
                  Minimal differences refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_1004}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: த லார ஆப த ரிங </span>
                </p>
                <p className={styles.block_1005}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: த லார ஆப த ரிஙஸ </span>
                </p>
                <p className={styles.block_1006}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>த லார ஆப த ரிங </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1007}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The actual name of the movie is "த லார ஆப த ரிஙஸ". Even
                    though speaker dropped plural suffix "-ஸ", it should be
                    transcribed as it was spoken.
                  </span>
                </p>
                <p className={styles.block_1008}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ேமடரிகஸ </span>
                </p>
                <p className={styles.block_1009}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ேமடரிகஸ </span>
                </p>
                <p className={styles.block_1010}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ேமடரிகஸ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1011}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The actual name of the movie is " ேமடரிகஸ". The speaker
                    omitted the article " " in the name. It should be
                    transcribed as spoken.
                  </span>
                </p>
                <p className={styles.block_1012}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: கனனத ல தத டட </span>
                </p>
                <p className={styles.block_1013}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: கனனத ல தத டடால </span>
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>கனனத ல தத டட </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1014}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The actual name of the movie is "கனனத ல தத டடால". Even
                    though speaker dropped the suffix "-ல", it should be
                    transcribed as it was spoken.
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Always use the official spelling and formatting for the
                  following types of terms. If you are not sure about the
                  spelling or formatting, transcribe them as they are spelled
                  and formatted on their Wikipedia page in your country. Note,
                  this only applies to terms in your language. For instruction
                  on transcribing English terms, refer to the English subsection
                  in Foreign Language.
                </p>
                <p className={styles.block_1017}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Technical terms </span>
                </p>
                <p className={styles.block_1018}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Proper names </span>
                </p>
                <p className={styles.block_1019}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Celebrity names </span>
                </p>
                <p className={styles.block_1020}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Holidays </span>
                </p>
                <p className={styles.block_1021}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Brand names </span>
                </p>
                <p className={styles.block_1022}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Product names </span>
                </p>
                <p className={styles.block_1023}>
                  Spellings of common Proper Names
                </p>
                <p className={styles.block_1024}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>அ லன </span>
                </p>
                <p className={styles.block_1025}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>கா னி </span>
                </p>
                <p className={styles.block_1026}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>பா </span>
                </p>
                <p className={styles.block_1027}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>சஙக </span>
                </p>
                <p className={styles.block_1028}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>நதரி </span>
                </p>
                <p className={styles.block_1029}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>மாரகெரட </span>
                </p>
                <p className={styles.block_1030}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ேமாஹனா </span>
                </p>
                <p className={styles.block_1028}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ந யா </span>
                </p>
                <p className={styles.block_1031}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ரஞ தா </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_1033}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_1034}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ேகண கரஷ ஸ ரனஷாட </span>
                </p>
                <p className={styles.block_1035}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: "ேகண கரஷ" ஸ ரனஷாட </span>
                </p>
                <p className={styles.block_1036}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Quotation marks are not used to transcribe video game
                    names.
                  </span>
                </p>
                <p className={styles.block_1037}>
                  Transcribe all media titles with their original punctuation.
                  If punctuation from the title occurs at the end of a sentence,
                  do not transcribe another punctuation mark (a period, question
                  mark, or exclamation mark) for end of the sentence.
                </p>
                <p className={styles.block_1038}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான அசச ண ! அசச ண ! </span>
                </p>
                <p className={styles.block_1039}>ம ேறன.</p>
                <p className={styles.block_1040}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான அசச ண அசச ண </span>
                </p>
                <p className={styles.block_1041}>ம ேறன.</p>
                <p className={styles.block_1042}>
                  Format lyrics that form a sentence as you would a normal
                  sentence.
                </p>
                <p className={styles.block_1043}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : YouTube உ ேரா ைளயாட ெசயதாய, அனேப ேபா.{' '}
                  </span>
                </p>
                <p className={styles.block_1044}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : YouTube உ ேரா ைளயாட ெசயதாய அனேப ேபா{' '}
                  </span>
                </p>
                <p className={styles.block_1045}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The speaker is quoting lyrics so still format the sentence
                    with proper punctuation.
                  </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  in the reference dictionary (Oxford Tamil Dictionary) for your
                  language. If there is no entry, Google the word and use the
                  spelling with the most results.
                </p>
                <p className={styles.block_1048}>
                  Use official spelling for technical and scientific terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_1049}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ெந மேபா ேபரா </span>
                </p>
                <p className={styles.block_1050}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஈ. ேகாைல </span>
                </p>
                <p className={styles.block_1051}>
                  Transcribe slang and colloquialisms as they are commonly
                  written in your language. Do not change non-standard speech
                  that the speaker wouldn't want corrected.
                </p>
                <p className={styles.block_948}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அநதாணட ேபா </span>
                </p>
                <p className={styles.block_1052}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: அதன அணைட ேபா </span>
                </p>
                <p className={styles.block_1053}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>அநதாணட ேபா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1054}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Do not change the non standard "அநதாணட ேபா" to the
                    standard "அதன அணைட ேபாt".
                  </span>
                </p>
                <p className={styles.block_1055}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான காப ம ற </span>
                </p>
                <p className={styles.block_1056}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான காப ம ேறன </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>நான காப ம ற </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1057}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech.
                </p>
                <p className={styles.block_1058}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ேபாகேவண ம. </span>
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நா ேபாக . </span>
                </p>
                <p className={styles.block_1059}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>நா ேபாக </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1060}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Although the speaker said "நா ேபாக ", this is an informal
                    spelling and should be changed to the standard spelling:
                    "நான ேபாகேவண ம".
                  </span>
                </p>
                <p className={styles.block_1061}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_1062}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ச மார </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஷ மார </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_1063}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_1064}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஞன </span>
                </p>
                <p className={styles.block_1065}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ன </span>
                </p>
                <p className={styles.block_1066}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஞன </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1067}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Although "ஞன " is not a standard word in Tamil, it should
                    be transcribed as "ஞன ", and not the standard form " ன ".
                  </span>
                </p>
                <p className={styles.block_1068}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, do a Google
                  search for the word. If there is a clear candidate, transcribe
                  that word.
                </p>
                <p className={styles.block_1069}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1070}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
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
