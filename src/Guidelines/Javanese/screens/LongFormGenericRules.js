import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const LongFormGenericRules = () => {
  const classes = useStyles()

  const headingIds = [
    'unintelligible-or-foreign-or-singing',
    'segmentation',
    'speaker-labeling',
    'audio-labels',
    'PII',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Javanese" />
            <div className="content">
              <p className={styles.block_75}>
                <span className={'heading'}>Longform generic rules </span>
              </p>
              <p className={'text'}>
                Follow the rules in this section to label and transcribe speaker
                segments for longform&nbsp; audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized&nbsp; speech. For
                speech that is unintelligible, foreign, or singing, follow the
                rules below. Only&nbsp; transcribe up to 20 unique speakers.
                Stop transcribing the task once the 21st speaker is&nbsp;
                heard.&nbsp;
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_}>
                    If you hear speech that is unintelligible or in a foreign
                    language, create a speaker&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    segment that covers only the audio range with that speech.
                    Select either the&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    Unintelligible or Foreign Speech Label and assign to the
                    appropriate speaker.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_79}>
                  <span className={styles.text_}>
                    If the entire audio is unintelligible or in a foreign
                    language, create a speaker segment&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    that covers the entire audio range and select either the
                    Unintelligible or Foreign Speech&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>Label.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_80}>
                  <span className={styles.text_}>
                    If you hear audio that is singing, transcribe the lyrics,
                    assign to the appropriate speaker,&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    and add the Singing label. If the singing is in a foreign
                    language, select the Foreign&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>Speech label.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>
                <p className={styles.block_82}>
                  <span className={styles.text_16}>
                    All speaker segment boundaries should be accurate with at
                    least 100ms precision.&nbsp;
                  </span>
                  <span className={styles.text_17}> </span>
                </p>
                <p className={styles.block_83}>
                  <span className={styles.text_}>
                    Speaker turns should not contain pauses in speech that are
                    longer than 0.5 seconds. If&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    a speaker does pause their speech for longer than 0.5
                    seconds, end the speaker turn&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    before the pause then create a new turn for when the speaker
                    resumes talking.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_84}>
                  <span className={styles.text_}>
                    Speaker turns should not be longer than 30 seconds. If a
                    single speaker talks for more&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    than 30 consecutive seconds without taking a 0.5 second
                    pause, then end the turn at&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    the 30 second mark and begin a new turn.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>Speaker labeling</p>
                <p className={styles.block_85}>
                  <span className={styles.text_}>
                    All speaker labels should be consistently formatted. Speaker
                    labels should always: be in&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    all lowercase, be spelled correctly, and should not contain
                    underscores or hyphens. Only&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    transcribe up to the 20th unique speaker.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>Correct: speaker 1&nbsp;</p>
                <p className={styles.block_87}>Incorrect: Speaker 1&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: pre recorded speaker 1&nbsp;
                </p>
                <p className={styles.block_89}>
                  Incorrect: pre-recorded speaker_1&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: unidentifiable speaker&nbsp;
                </p>
                <p className={styles.block_90}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    'speaker #' Used for different speakers in the audio.
                    Includes a number that&nbsp; corresponds to each different
                    speaker.&nbsp;
                  </span>
                </p>
                <p className={styles.block_91}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    'pre recorded speaker #' Used when there is speech coming
                    from a machine.&nbsp; Includes a number that corresponds to
                    each different pre recorded speaker.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    'unidentifiable speaker' Used when you cannot identify who
                    the speaker is. Does&nbsp; not ever include numbers.&nbsp;
                  </span>
                </p>
                <p className={styles.block_92}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    'speaker Tom' Used when the name of a speaker becomes known.
                    The names of&nbsp; speakers should always be capitalized.
                    You can use first and last names. (Note:&nbsp; adding
                    speaker names will be allowed for some projects but not
                    others. In tool&nbsp; validators will indicate whether or
                    not you can submit a speaker name.)&nbsp;
                  </span>
                </p>
              </div>
              <div id="audio-labels">
                <p className={'heading'}>Audio labels</p>
                <p className={styles.block_94}>
                  <span className={styles.text_}>
                    For instances with music and lyrics, create separate labels:
                    one for Music and one for&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    Singing. Transcribe the singing speech and assign to the
                    appropriate speaker.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_95}>
                  <span className={styles.text_}>
                    Below is a list of labels that may be available for you to
                    choose from. Each contain a&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    description of when is an appropriate time to use it.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_96}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Applause: Use this label if you hear one or more people
                    clapping or cheering.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    DTMF: Stands for 'dual-tone multi-frequency.' This is the
                    sound you hear when a&nbsp; number is pressed during a phone
                    call. For example, 'Press one to speak to a&nbsp;
                    representative' DTMF.&nbsp;
                  </span>
                </p>
                <p className={styles.block_97}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Foreign Speech: Use this label if the speaker is not talking
                    in the target language.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Laughter: Use this label when you hear laughter.&nbsp;
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    Music: Use this label when you hear music.&nbsp;
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Noise: Use this label for instances of miscellaneous noise
                    events.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    PII: Use this label when you hear Personally Identifiable
                    Information (PII). For&nbsp; more information see the PII
                    section of this guideline.&nbsp;
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    Ring Tone: Use this label when you hear a ring-tone.&nbsp;
                  </span>
                </p>
                <p className={styles.block_100}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Singing: Use this label to indicate that the speaker is
                    singing their speech.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Unintelligible: Use this label to indicate that you cannot
                    understand what the&nbsp; speaker is saying.&nbsp;
                  </span>
                </p>
                <p className={styles.block_101}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    Unknown: Use this label for audio events that are not
                    classified to any of the&nbsp; above labels.&nbsp;
                  </span>
                </p>
              </div>
              <div id="PII">
                <p className={'heading'}>PII</p>
                <p className={styles.block_103}>
                  <span className={styles.text_}>
                    PII stands for Personally Identifiable Information. PII is
                    information that is not publicly&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    available, but can help you or Google identify an individual
                    person.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_104}>
                  <span className={styles.text_}>
                    PII should never be transcribed. When PII is heard, create a
                    new speaker segment that&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    captures the audio range of the PII speech. Add the PII
                    label and assign to the&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    appropriate speaker. Do not transcribe PII.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_105}>
                  <span className={styles.text_}>
                    If applicable, select the appropriate PII subcategory which
                    is nested underneath the&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    parent 'PII' label. If the appropriate PII subcategory is
                    not available then select the&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    parent 'PII' label to cover all other cases. If there are no
                    PII subcategories available to&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    choose from then use the 'PII' label for all cases of
                    PII.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_106}>
                  <span className={styles.text_16}>
                    See the below list for all valid PII items&nbsp;
                  </span>
                  <span className={styles.text_17}> </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    NAME: First and/or Last name&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    CREDIT_CARD_NUMBER&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>EMAIL&nbsp; </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>PHONE_NUMBER&nbsp; </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    SOCIAL_INSURANCE_NUMBER&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    DRIVER_LICENSE_NUMBER&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    NATIONAL_HEALTH_SERVICE_NUMBER&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    SOCIAL_SECURITY_NUMBER&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>PASSPORT&nbsp;</span>
                </p>
                <p className={styles.block_108}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                    identifier issued by the&nbsp; Australian Taxation Office
                    (ATO) to each taxpaying entity&nbsp;
                  </span>
                </p>
                <p className={styles.block_109}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    LOCATION_STREET: If the street name is heard, mark as PII.
                    Other locations&nbsp; such as State, City, County, zip code
                    are all OK to transcribe.&nbsp;
                  </span>
                </p>
                <p className={styles.block_110}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    LOCATION_STREET_NUMBER: If the street number is heard, mark
                    as PII. Other&nbsp; locations such as State, City, County,
                    zip code are all OK to transcribe.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    MRN (medical record number)&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                    Securities&nbsp; Identification Procedures. A CUSIP number
                    identifies most financial instruments,&nbsp; including:
                    stocks of all registered U.S. and Canadian companies,
                    commercial&nbsp; paper, and U.S. government and municipal
                    bonds.&nbsp;
                  </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    BC_PHN: Each B.C. resident enrolled with the Medical
                    Services Plan (MSP) is&nbsp; given a unique lifetime
                    identifier for health care called a Personal Health
                    Number&nbsp; (PHN)&nbsp;
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    OHIP: Ontario Health Insurance Plan&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    QUEBEC_HIN: Quebec Health Insurance Number&nbsp;
                  </span>
                </p>
                <p className={styles.block_114}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    CNI NIR: The French national identity card (French: Carte
                    nationale d'identite or&nbsp; CNI) is an official identity
                    document consisting of a laminated plastic card&nbsp;
                    bearing a photograph, name and address.&nbsp;
                  </span>
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    IBAN_CODE: The International Bank Account Number (IBAN) is
                    an internationally&nbsp; agreed system of identifying bank
                    accounts&nbsp;
                  </span>
                </p>
                <p className={styles.block_116}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    SWIFT_CODE: A SWIFT code is an international bank code that
                    identifies&nbsp; particular banks worldwide. It's also known
                    as a Bank Identifier Code (BIC).&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    BANK_ROUTING_MICR: The numbers located on the bottom of a
                    check is called&nbsp; a MICR line. MICR means Magnetic Image
                    Character Recognition. The MICR line&nbsp; is made up of
                    three sets of numbers. The first set is called the ABA Bank
                    Routing&nbsp; Number or routing transit number (RTN)&nbsp;
                  </span>
                </p>
                <p className={styles.block_117}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    DEA_NUMBER: A DEA number (DEA Registration Number) is an
                    identifier&nbsp; assigned to a health care provider (such as
                    a physician, optometrist, dentist, or&nbsp; veterinarian) by
                    the United States Drug Enforcement Administration&nbsp;
                  </span>
                </p>
                <p className={styles.block_118}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                    unique 10-digit&nbsp; identification number issued to health
                    care providers in the United States by the&nbsp; Centers for
                    Medicare and Medicaid Services (CMS).&nbsp;
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>MEDICARE_NUMBER&nbsp; </span>
                </p>
                <p className={styles.block_119}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    NIE_NUMBER: The NIE is a tax identification number in
                    Spain&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or Natural
                    Persons&nbsp; Register) is a number assigned by the
                    Brazilian revenue agency to both Brazilians&nbsp; and
                    resident aliens who are subject to taxes in Brazil&nbsp;
                  </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                    that acts as an&nbsp; identification for individuals,
                    families and corporates (Indian or Foreign),&nbsp;
                    especially those who pay Income Tax&nbsp;
                  </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    BSN_NUMBER: netherlands: The citizen service number (BSN) is
                    a unique&nbsp; personal number allocated to everyone
                    registered in the Personal Records&nbsp; Database
                    (BRP).&nbsp;
                  </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    ICD_CODE: International Statistical Classification of
                    Diseases and Related Health&nbsp; Problems (ICD), a medical
                    classification list by the World Health Organization&nbsp;
                    (WHO). It contains codes for diseases, signs and symptoms,
                    abnormal findings,&nbsp; complaints, social circumstances,
                    and external causes of injury or diseases.&nbsp;{' '}
                  </span>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    FDA_CODE: Prescription drug&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    NIF: Tax Identification Number in Spain&nbsp;
                  </span>
                </p>
                <p className={styles.block_123}>
                  http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html&nbsp;
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_7}>● </span>
                  <span className={styles.text_9}>
                    TAXPAYER_REFERENCE&nbsp;{' '}
                  </span>
                </p>
                <p className={styles.block_124}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                    Registro de&nbsp; Poblacion (translated into English as
                    Unique Population Registry Code or else as&nbsp; Personal ID
                    Code Number). It is a unique identity code for both citizens
                    and&nbsp; residents of Mexico.&nbsp;
                  </span>
                </p>
                <p className={styles.block_125}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_6}>
                    RRN: Receiver Registration Number (RNN) is a 10-character
                    alphanumeric can be&nbsp; to a bank account, a credit/debit
                    card, mobile wallet, or home delivery.&nbsp;
                  </span>
                </p>
                <p className={styles.block_126}>
                  <span className={styles.text_}>
                    Information that does not fit the above PII rules should NOT
                    be considered PII. Some&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    examples of things that are not PII are:&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>
                  Correct: Commonly known names like Taylor&nbsp;
                </p>
                <p className={styles.block_127}>
                  Swift, Tom Hanks, Michael Jordan&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: Company or Business name, phone&nbsp;
                </p>
                <p className={styles.block_128}>number, or address.&nbsp;</p>
                <p className={styles.block_88}>Correct: Pet names&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Social media handles&nbsp;
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Long Form Generic Rules"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default LongFormGenericRules

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
