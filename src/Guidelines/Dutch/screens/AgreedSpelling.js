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
            <PageContentHeader currentPage="longform Dutch" />
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
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_793}>
                  <span className={styles.text_4}>
                    Correct: Jumbo j u m b o{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Person said "Jumbo" and then{' '}
                  </span>
                </p>
                <p className={styles.block_794}>spelled it.</p>
                <p className={styles.block_795}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x
                </p>
                <p className={styles.block_796}>y z</p>
                <p className={styles.block_797}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_4}>Correct: KRO </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>k r o </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_799}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_800}>
                  Correct: woorden die beginnen met de letter J
                </p>
                <p className={styles.block_801}>
                  Correct: Hoeveel T's zitten er in tentoonstelling?
                </p>
                <p className={styles.block_802}>Interjections</p>
                <p className={styles.block_803}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_552}>
                  Correct: heh, ha, haha, hehe, boo hoo, lalala
                </p>
                <p className={styles.block_804}>Correct: hahaha</p>
                <p className={styles.block_805}>Incorrect: hahahahaha</p>
                <p className={styles.block_806}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ha ha ha ha ha </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_807}>
                  Explanation: Do not transcribe more than three
                </p>
                <p className={styles.block_808}>syllables.</p>
                <p className={styles.block_809}>Proper names</p>
                <p className={styles.block_810}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_811}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_812}>
                  <span className={styles.text_4}>Correct: P!nk </span>
                  <span className={styles.text_5}>
                    Explanation: The celebrity uses an exclamation
                  </span>
                </p>
                <p className={styles.block_813}>mark, not a regular "i".</p>
                <p className={styles.block_814}>Correct: will.i.am</p>
                <p className={styles.block_815}>
                  <span className={styles.text_4}>
                    Correct: Kristin Chenoweth{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The celebrity spells her name{' '}
                  </span>
                </p>
                <p className={styles.block_816}>
                  differently than the more common "Kristen".
                </p>
                <p className={styles.block_817}>
                  If proper names include diacritics uncommon in your language
                  (ć, š, á, etc.), do not include them in your spelling.
                </p>
                <p className={styles.block_818}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that is most
                  commonly used as a first name in the Netherlands according to
                  the Voornamenbank (which you can find on Google).
                </p>
                <p className={styles.block_819}>Correct: Bel Sophia.</p>
                <p className={styles.block_820}>Incorrect: Bel Sofia.</p>
                <p className={styles.block_821}>
                  Explanation: "Sophia" occurs almost 12,000
                </p>
                <p className={styles.block_822}>
                  times in the Netherlands, and "Sofia" only
                </p>
                <p className={styles.block_823}>occurs about 1,000 times.</p>
                <p className={styles.block_824}>
                  Spell and capitalize holidays as indicated in the Groene
                  Boekje (www.woordenlijst.org). This usually means you should
                  capitalize only their official names, but not derived names.
                </p>
                <p className={styles.block_825}>
                  Correct: Wanneer is Kerstmis dit jaar?
                </p>
                <p className={styles.block_826}>
                  Correct: Wanneer is kerst dit jaar?
                </p>
                <p className={styles.block_827}>
                  Correct: Wanneer is Pasen dit jaar?
                </p>
                <p className={styles.block_828}>
                  Correct: Wanneer is tweede paasdag dit jaar?
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'title'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_831}>
                  Correct: Hij werkt bij Amazon.
                </p>
                <p className={styles.block_832}>
                  Correct: Ik heb gehoord dat Yahoo en T-Mobile
                </p>
                <p className={styles.block_833}>
                  net een deal hebben gesloten.
                </p>
                <p className={styles.block_834}>Correct: YouTube</p>
                <p className={styles.block_835}>Correct: Burger King</p>
                <p className={styles.block_836}>Incorrect: BURGER KING</p>
                <p className={styles.block_837}>
                  Explanation: Do not spell "Burger King" all in
                </p>
                <p className={styles.block_838}>
                  upper case as in the stylized form of the logo,
                </p>
                <p className={styles.block_839}>
                  stick to the official form as per the privacy
                </p>
                <p className={styles.block_840}>policy.</p>
                <p className={styles.block_841}>Correct: LEGO</p>
                <p className={styles.block_842}>Incorrect: Lego</p>
                <p className={styles.block_843}>
                  Follow the official spelling, check on Wikipédia or choose the
                  spelling yielding more results on Google search.
                </p>
                <p className={styles.block_844}>● μTorrent</p>
                <p className={styles.block_845}>● Adidas</p>
                <p className={styles.block_846}>● ABN AMRO Bank</p>
                <p className={styles.block_847}>● Aegon</p>
                <p className={styles.block_683}>● Albert Heijn</p>
                <p className={styles.block_848}>● Aldi</p>
                <p className={styles.block_179}>● ANWB</p>
                <p className={styles.block_849}>● Arriva</p>
                <p className={styles.block_850}>● Bacardi</p>
                <p className={styles.block_851}>● Boldking</p>
                <p className={styles.block_852}>● Buienradar</p>
                <p className={styles.block_689}>● Center Parcs</p>
                <p className={styles.block_845}>● Chanel</p>
                <p className={styles.block_853}>● Coca-Cola</p>
                <p className={styles.block_854}>● Deen</p>
                <p className={styles.block_855}>● D-reizen</p>
                <p className={styles.block_856}>● Dubbelfrisss</p>
                <p className={styles.block_857}>● Duplo</p>
                <p className={styles.block_179}>● DUWO</p>
                <p className={styles.block_858}>● easyJet</p>
                <p className={styles.block_849}>● EHBO</p>
                <p className={styles.block_859}>● Emté</p>
                <p className={styles.block_860}>● Facebook</p>
                <p className={styles.block_861}>● FaceTime</p>
                <p className={styles.block_862}>● Fiat</p>
                <p className={styles.block_857}>● funda</p>
                <p className={styles.block_858}>● Gamma</p>
                <p className={styles.block_863}>● Google</p>
                <p className={styles.block_689}>● Google Earth</p>
                <p className={styles.block_864}>● googelen</p>
                <p className={styles.block_673}>● GroenRijk</p>
                <p className={styles.block_865}>● Harley-Davidson</p>
                <p className={styles.block_866}>● Hennes &amp; Mauritz</p>
                <p className={styles.block_867}>● HEMA</p>
                <p className={styles.block_868}>● HETWoonhart</p>
                <p className={styles.block_860}>● Hornbach</p>
                <p className={styles.block_869}>
                  ● IKEA (acronym for 'Ingvar Kamprad Elmtaryd Agunnary')
                </p>
                <p className={styles.block_859}>● IMDb</p>
                <p className={styles.block_690}>● ING Bank</p>
                <p className={styles.block_870}>● KamaSutrA</p>
                <p className={styles.block_871}>● Karwei</p>
                <p className={styles.block_872}>● Keuken Kampioen</p>
                <p className={styles.block_873}>● Kieskeurig</p>
                <p className={styles.block_874}>● Kinderen voor Kinderen</p>
                <p className={styles.block_875}>● Kwantum</p>
                <p className={styles.block_858}>● Kwik-Fit</p>
                <p className={styles.block_855}>● Lacosta</p>
                <p className={styles.block_876}>● Landal GreenParks</p>
                <p className={styles.block_877}>● LEGO</p>
                <p className={styles.block_878}>● Lidl</p>
                <p className={styles.block_858}>● Lolhoek</p>
                <p className={styles.block_879}>● Makro</p>
                <p className={styles.block_880}>● McDonald's</p>
                <p className={styles.block_881}>● mora</p>
                <p className={styles.block_856}>● Media Markt</p>
                <p className={styles.block_882}>● Mini</p>
                <p className={styles.block_883}>● MSN</p>
                <p className={styles.block_884}>● Net5</p>
                <p className={styles.block_693}>● Nescafé</p>
                <p className={styles.block_885}>● Nivea</p>
                <p className={styles.block_886}>● Nutella</p>
                <p className={styles.block_887}>● Omo</p>
                <p className={styles.block_888}>● Ortec</p>
                <p className={styles.block_881}>● Palm</p>
                <p className={styles.block_857}>● Pathé</p>
                <p className={styles.block_866}>● Pauw &amp; Witteman</p>
                <p className={styles.block_861}>● Playmobil</p>
                <p className={styles.block_882}>● Plus</p>
                <p className={styles.block_681}>● PowerPoint</p>
                <p className={styles.block_680}>● Praxis</p>
                <p className={styles.block_693}>● Prénatal</p>
                <p className={styles.block_849}>● Puma</p>
                <p className={styles.block_889}>● Q-music</p>
                <p className={styles.block_861}>● Rabobank</p>
                <p className={styles.block_685}>● RadioNL</p>
                <p className={styles.block_887}>● RDW</p>
                <p className={styles.block_877}>● Reaal</p>
                <p className={styles.block_687}>● RijnlandRoute</p>
                <p className={styles.block_849}>● RTL 4</p>
                <p className={styles.block_849}>● RTL 5</p>
                <p className={styles.block_857}>● RTL 7</p>
                <p className={styles.block_890}>● Ryanair</p>
                <p className={styles.block_690}>● Samsung</p>
                <p className={styles.block_891}>● Samsung Galaxy</p>
                <p className={styles.block_881}>● SBS6</p>
                <p className={styles.block_892}>● Senseo</p>
                <p className={styles.block_680}>● Skoda</p>
                <p className={styles.block_893}>● Slam!FM</p>
                <p className={styles.block_849}>● Smint</p>
                <p className={styles.block_894}>● SpangaS</p>
                <p className={styles.block_894}>● spelen.nl</p>
                <p className={styles.block_895}>● Spider-Man</p>
                <p className={styles.block_179}>● Swype</p>
                <p className={styles.block_885}>● Tele2</p>
                <p className={styles.block_896}>● de telefoongids</p>
                <p className={styles.block_893}>● T-Mobile</p>
                <p className={styles.block_845}>● Twitter</p>
                <p className={styles.block_897}>● Tom en Jerry</p>
                <p className={styles.block_695}>● TomTom</p>
                <p className={styles.block_898}>● Tupac</p>
                <p className={styles.block_899}>● Uitzending Gemist</p>
                <p className={styles.block_850}>● UNICEF</p>
                <p className={styles.block_900}>● Vroom &amp; Dreesmann</p>
                <p className={styles.block_901}>● Wehkamp</p>
                <p className={styles.block_902}>● WhatsApp</p>
                <p className={styles.block_860}>● Wikipedia</p>
                <p className={styles.block_903}>● wiki</p>
                <p className={styles.block_904}>● YouTube</p>
                <p className={styles.block_892}>● Zembla</p>
                <p className={styles.block_845}>● 50Plus</p>
                <p className={styles.block_903}>● 7Up</p>
                <p className={styles.block_905}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "oké". This spelling is unique to these
                  cases.
                </p>
                <p className={styles.block_434}>Correct: Ok Google</p>
                <p className={styles.block_906}>Correct: Ok Google Now</p>
                <p className={styles.block_907}>
                  Correct: Ok Google, waar is er hier een
                </p>
                <p className={styles.block_908}>Starbucks?</p>
                <p className={styles.block_909}>
                  Correct: Ok Google, pannenkoeken
                </p>
                <p className={styles.block_910}>Correct: Oké.</p>
                <p className={styles.block_911}>Correct: Oké, David.</p>
                <p className={styles.block_826}>
                  Correct: Oké Patty, laten we gaan.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_914}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_915}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_916}>
                  Correct: afleveringen van De Wereld Draait Door
                </p>
                <p className={styles.block_917}>
                  Incorrect: afleveringen van "De Wereld Draait
                </p>
                <p className={styles.block_918}>Door"</p>
                <p className={styles.block_436}>
                  Correct: Speel Per Spoor van Guus Meeuwis.
                </p>
                <p className={styles.block_919}>
                  Incorrect: Speel "Per Spoor" van Guus Meeuwis.
                </p>
                <p className={styles.block_920}>
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
                <p className={styles.block_921}>
                  Correct: Ik kijk graag naar Gordon Ramsey:
                </p>
                <p className={styles.block_922}>
                  Oorlog in de keuken! maar helaas moet ik het
                </p>
                <p className={styles.block_923}>vandaag missen.</p>
                <p className={styles.block_436}>
                  Correct: Morgenavond is er weer een nieuwe
                </p>
                <p className={styles.block_924}>
                  aflevering van Goede tijden, slechte tijden.
                </p>
                <p className={styles.block_925}>
                  Correct: Kom je donderdagavond ook gezellig
                </p>
                <p className={styles.block_926}>
                  bij ons meekijken naar Wie is de Mol?
                </p>
                <p className={styles.block_927}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_928}>
                  <span className={styles.text_4}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Transformers: Revenge of the
                  </span>
                </p>
                <p className={styles.block_929}>Fallen"</p>
                <p className={styles.block_930}>
                  <span className={styles.text_4}>
                    Correct: What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "The Fox (What Does the Fox
                  </span>
                </p>
                <p className={styles.block_931}>Say?)"</p>
                <p className={styles.block_932}>
                  Correct: Ik wil de laatste aflevering van DWDD
                </p>
                <p className={styles.block_933}>zien.</p>
                <p className={styles.block_934}>
                  Explanation: Official title is "De Wereld Draait
                </p>
                <p className={styles.block_935}>Door".</p>
                <p className={styles.block_936}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_937}>
                  Correct: YouTube We are the champions my
                </p>
                <p className={styles.block_938}>
                  friends, and we'll keep on fighting till the end.
                </p>
                <p className={styles.block_939}>
                  Incorrect: YouTube We Are the Champions my
                </p>
                <p className={styles.block_940}>
                  friends, and we'll keep on fighting till the end.
                </p>
                <p className={styles.block_939}>
                  Incorrect: YouTube We Are the Champions My
                </p>
                <p className={styles.block_941}>
                  Friends And We'll Keep on Fighting till the End.
                </p>
                <p className={styles.block_942}>
                  Explanation: They are quoting lyrics that just
                </p>
                <p className={styles.block_943}>
                  happen to contain the title; format as full
                </p>
                <p className={styles.block_944}>sentence.</p>
                <p className={styles.block_945}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_946}>Correct: Y Tu Mama Tambien</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_949}>Correct: ideeënloos</p>
                <p className={styles.block_950}>Incorrect: ideeëloos</p>
                <p className={styles.block_951}>
                  Explanation: "ideeënloos" is preferred by
                </p>
                <p className={styles.block_952}>
                  Groene Boekje (www.woordenlijst.org).
                </p>
                <p className={styles.block_953}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_232}>
                  Correct: De koe staat in de wei.
                </p>
                <p className={styles.block_233}>
                  Incorrect: De koe staat in de wij.
                </p>
                <p className={styles.block_954}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_955}>
                  Correct: Pseudotsuga menziesii
                </p>
                <p className={styles.block_956}>Correct: E. coli</p>
                <p className={styles.block_957}>Correct: Metronidazole</p>
                <p className={styles.block_958}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_959}>
                  Correct: Dat zijn geen grappen niet.
                </p>
                <p className={styles.block_960}>
                  Incorrect: Dat zijn geen grappen.
                </p>
                <p className={styles.block_961}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    dat zijn geen grappen niet{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_962}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech.
                </p>
                <p className={styles.block_963}>
                  <span className={styles.text_4}>
                    Correct: Dat denk ik niet.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>dat denk ‘k niet </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_964}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_965}>
                  <span className={styles.text_4}>Correct: Gangnam Style </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>gangdam style </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_966}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_967}>
                  <span className={styles.text_4}>
                    Correct: verpannenkoeken{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: It's hard to imagine a context in
                  </span>
                </p>
                <p className={styles.block_968}>
                  which this verb would be used, but it conforms
                </p>
                <p className={styles.block_969}>
                  to the standard pattern of "ver-NOUN-en",
                </p>
                <p className={styles.block_970}>
                  meaning "to turn something into the NOUN", so
                </p>
                <p className={styles.block_971}>you should transcribe it.</p>
                <p className={styles.block_972}>
                  Correct: Neem je ook wat aardbozen mee voor
                </p>
                <p className={styles.block_973}>
                  Explanation: Unsure whether speaker intended
                </p>
                <p className={styles.block_974}>in onze smoothie, schat?</p>
                <p className={styles.block_975}>
                  to say "aardbeien" or "frambozen", but clearly
                </p>
                <p className={styles.block_976}>
                  articulated and easy to spell.
                </p>
                <p className={styles.block_977}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_978}>
                  <span className={styles.text_4}>Correct: Kaloli </span>
                  <span className={styles.text_5}>
                    Explanation: User says "Kaloli". This might
                  </span>
                </p>
                <p className={styles.block_979}>
                  sound like nonsense at first, but the transcriber
                </p>
                <p className={styles.block_980}>
                  guesses the spelling "kalolli" and is by
                </p>
                <p className={styles.block_981}>
                  corrected Google Search to "Kaloli", a gasoline
                </p>
                <p className={styles.block_982}>
                  tanker and place in Hawaii. Transcribe Kaloli.
                </p>
                <p className={styles.block_983}>
                  <span className={styles.text_4}>Correct: Souk Abdali </span>
                  <span className={styles.text_5}>
                    Explanation: User says "Souk Abdali".{' '}
                  </span>
                </p>
                <p className={styles.block_984}>
                  Transcriber searches "sukabdali", finds correct
                </p>
                <p className={styles.block_985}>
                  results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_569}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_986}>
                  <span className={styles.text_4}>Correct: Leidselaan </span>
                  <span className={styles.text_5}>
                    Explanation: There is no street with this name
                  </span>
                </p>
                <p className={styles.block_987}>
                  anywhere in the Netherlands, but the audio is
                </p>
                <p className={styles.block_988}>
                  clear and there is no ambiguity on how to spell
                </p>
                <p className={styles.block_989}>
                  this street name, so transcribe it.
                </p>
                <p className={styles.block_990}>
                  For the following words, use these spellings:
                </p>
                <p className={styles.block_882}>● fuck</p>
                <p className={styles.block_991}>● fucking</p>
                <p className={styles.block_992}>● what the fuck</p>
                <p className={styles.block_993}>● fucking vet</p>
                <p className={styles.block_994}>● fucking cool</p>
                <p className={styles.block_895}>● fuck a duck</p>
                <p className={styles.block_879}>● sms'je</p>
                <p className={styles.block_863}>● sms'en</p>
                <p className={styles.block_995}>● stadion Galgenwaard</p>
                <p className={styles.block_671}>● stadion De Kuip</p>
                <p className={styles.block_674}>● tattoo, tattoos</p>
                <p className={styles.block_996}>● auw</p>
                <p className={styles.block_862}>● aub</p>
                <p className={styles.block_997}>● svp</p>
                <p className={styles.block_998}>● ps</p>
                <p className={styles.block_999}>● oh</p>
                <p className={styles.block_1000}>● idd</p>
                <p className={styles.block_1001}>● xd</p>
                <p className={styles.block_1002}>● iig</p>
                <p className={styles.block_998}>● ah</p>
                <p className={styles.block_1000}>● alé</p>
                <p className={styles.block_883}>● amai</p>
                <p className={styles.block_1003}>● bam</p>
                <p className={styles.block_862}>● boe</p>
                <p className={styles.block_998}>● eh</p>
                <p className={styles.block_1004}>● ehm</p>
                <p className={styles.block_680}>● ennuh</p>
                <p className={styles.block_697}>● e-mail</p>
                <p className={styles.block_1002}>● ey</p>
                <p className={styles.block_997}>● hey</p>
                <p className={styles.block_998}>● hè</p>
                <p className={styles.block_1000}>● hai</p>
                <p className={styles.block_845}>● hm hm</p>
                <p className={styles.block_898}>● hoihoi</p>
                <p className={styles.block_697}>● oh jee</p>
                <p className={styles.block_887}>● oh ja</p>
                <p className={styles.block_863}>● oh wee</p>
                <p className={styles.block_848}>● oeh</p>
                <p className={styles.block_878}>● oké</p>
                <p className={styles.block_1003}>● ofzo</p>
                <p className={styles.block_887}>● enzo</p>
                <p className={styles.block_1005}>● ja ja</p>
                <p className={styles.block_1006}>● uh</p>
                <p className={styles.block_998}>● yo</p>
                <p className={styles.block_1007}>● yeah</p>
                <p className={styles.block_862}>● huh</p>
                <p className={styles.block_689}>● naar de klote</p>
                <p className={styles.block_885}>● tweet</p>
                <p className={styles.block_1008}>● scheiße</p>
                <p className={styles.block_996}>● ALT</p>
                <p className={styles.block_903}>● DEL</p>
                <p className={styles.block_888}>● CTRL</p>
                <p className={styles.block_1005}>● ESC</p>
                <p className={styles.block_1009}>● F1, F2, etc...</p>
                <p className={styles.block_994}>● lol (not LOL)</p>
                <p className={styles.block_672}>● yolo (not YOLO)</p>
                <p className={styles.block_1010}>● MILF</p>
                <p className={styles.block_887}>● Wi-Fi</p>
                <p className={styles.block_860}>● Bluetooth</p>
                <p className={styles.block_858}>● ID-kaart</p>
                <p className={styles.block_1011}>● SD-kaart</p>
                <p className={styles.block_685}>● QR-code</p>
                <p className={styles.block_858}>● woehoe</p>
                <p className={styles.block_1003}>● x x x</p>
                <p className={styles.block_1012}>● wazzup</p>
                <p className={styles.block_903}>● tatu</p>
                <p className={styles.block_871}>● sjonge</p>
                <p className={styles.block_994}>● sjongejonge</p>
                <p className={styles.block_893}>● simkaart</p>
                <p className={styles.block_892}>● drie uur</p>
                <p className={styles.block_687}>● goedemorgen</p>
                <p className={styles.block_1013}>● goedemiddag</p>
                <p className={styles.block_694}>● goedenavond</p>
                <p className={styles.block_1009}>● goedenacht</p>
                <p className={styles.block_1014}>● goedendag</p>
                <p className={styles.block_179}>● smiley</p>
                <p className={styles.block_1012}>● smileys</p>
                <p className={styles.block_1015}>
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
