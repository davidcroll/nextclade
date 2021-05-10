# General
## What does nextclade do? What do I need to know?
Nextclade allows you to analyze SARS-CoV-2 sequences in the web browser. It will align your sequence data to a reference genome, call mutations relative to that reference, and place your sequences on a SARS-CoV-2 phylogeny. It also reports clade assignments and quality of your sequence data.

## Does my sequence data leave my computer?
No, it does not. All steps - sequence alignment, variant calling, clade assignment, and tree placement - are happening on your computer, in your browser.

## What do the QC indicators mean?
Nextclade calculates several metrics that indicate sequence quality. We currently use four such metrics:
  - **Missing data**: The amount of unknown bases (`N`).
  - **Mixed sites**: The amount of bases that are not `ACTG-N`, for example `R` (for `A or G`),`Y` (for `C or T`), `K` for `G or T`) and so on. `-` is a gap in the sequence, and `N` denotes any base.
  - **Private mutations**: The number of mutations that map to the terminal branch leading to the sequence after attachment to the tree. Many private mutation either indicate many sequencing errors, or an unusual variant without close relatives in the tree.
  - **SNP clusters**: Several mutations in a short stretch can indicate assembly problems. We calculate such SNP clusters using only the private mutations.

The rules on missing data, private mutations, and SNP clusters mimic the exclusion criteria used by the nextstrain augur tool.

## How can I contact the creators of Nextclade?
The nextstrain team maintains a discussion forum at discussion.nextstrain.org. You can post your questions there. For bugs in the software or feature requests, please open an issue on  [GitHub](https://github.com/nextstrain/nextclade/issues).

## Can I use my own tree?
Yes, you can specify your own tree, reference sequence, and QC settings in the advanced mode. Your phylogenetic tree can be generated using the `augur` pipeline.

## Is Nextclade available for other pathogens and microorganisms, too?
Nextclade works for other viruses, but you have to specify your own reference sequences, trees, and annotations. Only SARS-CoV-2 data is currently provided as a default. We plan to provide support for other pathogens in the future.


# Output files

## CSV/TSV outputs
CSV and TSV are text files with tabular data. Columns are either separated with commas or semicolons (CSV) or tabs (TSV). CSV and TSV are compatible with any spreadsheet application. To open these files, make sure to select:
* the proper text encoding (UTF-8 and ISO-8859-1 are the most common)
* the kind of separator - comma, semicolon, tab...
* and how strings (character values) are indicated. Usually, strings are delimited with "..." (double quotes.

Nextclade's CSV files are semicolon-separated. Selecting `,` as the separator will break certain fields, for example the the nucleotide substitutions.

### Data fields

The output file contains the following columns:

#### Names
__seqName__ provides the name of the sequence, as indicated in the input.
__clade__: The Nextstrain designation of the SARS-CoV-2 sample, with the year and a letter given - for example, 19A or 20B. See [this blog entry](https://nextstrain.org/blog/2021-01-06-updated-SARS-CoV-2-clade-naming) for more information.

#### Sequence quality and statistics
__qc.overallScore__ and __qc.overallStatus__ indicate the overall sequence quality.

__totalPcrPrimerChanges__, __totalGaps__, __totalInsertions__, __totalMissing__, __totalMutations__ and __totalNonACGTNs__ are rather self-explanatory numbers. Note that the use of non-standard PCR primers are annotated in the field __pcrPrimerChanges__.

#### Mutations at the nucleotide level

The fields __substitutions__, __deletions__ and __insertions__ are self-evident. They indicate the mutations - in respect to the reference sequence - in your supplied FASTA sequence.

__missing__ and __nonACGTNs__, again, refer to sequence quality. <!-- not sure, come back to this problem later -->

#### Changes in Amino Acids

__aaSubstitutions__ indicate the changed amino acids, together with the Open Reading Frame (ORF) in which the mutation occurred. __totalAminoacidSubstitutions__ give the total number of changed amino acids.

__aaDeletions__ and __totalAminoacidDeletions__ are self-explanatory in this context.

#### Alignment Diagnostics

<!-- unclear - if the reference sequence is NNNNNNNNN, and my supplied sequence is longer, what will happen? The other way round, I'd understand this... -->
__alignmentStart__ and __alignmentEnd__

## JSON output
In contrast to CSV/TSV, the JSON file contains the complete results. There are several tools and programming languages which can read the JSON files.


## Auspice tree output (JSON-auspice)
If you choose this format, you can further analyze and visualize the results on [auspice.us](http://www.auspice.us).


# Other Issues
<!-- think about what to do about this "Other Issues" - seems to be a remnant of earlier editing -->

## Alignment and mutations

## User’s Guide

<!-- insert URL of that guide - is there already a published version? -->
A comprehensive user's guide can be found at [](), which explains the local and the browser version of nextclade in much more detail. 

Add contact/feedback form good first issue help wanted t:feat
#82 opened on Jul 3, 2020 by ivan-aksamentov

## Is there a translation of Nextclade?
At the moment, no. We’re welcoming people who would contribute their time and skills for translations. See this issue on our GitHub site: https://github.com/nextstrain/nextclade/issues/37


## How does Nextclade work?

Nextclade aligns your sequences individually to the reference sequence using a banded local alignment with affine gap cost (zero gap extension cost). It then determines the differences between your data and the reference sequence, before identifying the closest match for your sequence in the tree. Clade information is inferred from the points in the reference tree your sequences attach to. 

Nextclade is part of the Nextstrain project, which offers a integrated toolset for the temporal, geographical and genetical analysis of pathogens.

<!-- removed literature references:
Literature:
* Hadfield, James, et al. "Nextstrain: real-time tracking of pathogen evolution." Bioinformatics 34.23 (2018): 4121-4123.
* Katoh, Kazutaka, et al. "MAFFT: a novel method for rapid multiple sequence alignment based on fast Fourier transform." Nucleic acids research 30.14 (2002): 3059-3066.
* Sagulenko, Pavel, Vadim Puller, and Richard A. Neher. "TreeTime: Maximum-likelihood phylodynamic analysis." Virus evolution 4.1 (2018): vex042.
-->

### How is the overall quality score (qc.overallScore) calculated?

#355 opened on Feb 18 by nbargues

The code is at https://github.com/nextstrain/nextclade/tree/master/packages/web/src/algorithms/QC

### Is there a global quality indicator?


Add global quality control indicator good first issue help wanted t:feat
#61 opened on Jul 1, 2020 by ivan-aksamentov

### Are the mutations linked to nextstrain.org?

Link mutations to nextstrain.org good first issue help wanted t:feat
#86 opened on Jul 3, 2020 by ivan-aksamentov

# Genetics

## Sequences


### I only have a partial sequence of a SARS-CoV-2 virus. Is it still usable?

If your FASTA file contains more than ~1000 nucleotides, and if your sequence data does not contain too many errors, nextclade will - most probably - be able to identify your SARS-CoV-2 strain.

## Nucleotide, Amino Acid, and Gene Positions

### Gene position after alignment

Can I get gene position after alignment on Nextclade? package: nextalign package: nextalign_cli t:ask t:feat
#370 opened on Mar 8 by HuangGuna

### Nucleotide position of an amino acid change

I need to find the position of the nucleotide substitution of a specific amino acid change. How can I do that?

https://github.com/nextstrain/nextclade/issues/380


## Private Mutations

### What does the Private Mutations QC column mean?

t:ask
#265 opened on Nov 11, 2020 by tjbutler003

### How can I flag private mutations?

TODO: Read github issue first!

Flag private mutations help wanted t:feat
#302 opened on Jan 15 by proychou

## Amino acid insertions

Nextclade only shows insertions in the nucleotide sequence, but not insertions in the aminoacid sequence.

https://github.com/nextstrain/nextclade/issues/319

At the moment, nextclade does not offer such a function. It’s possible that a future release will indicate the insertions in the aminoacid sequence.

## Do I get a warning if a clade-defining mutation is missing in my FASTA sequence?

Warn when clade-defining mutations fall to missing nucleotides prio:high t:bug t:feat
#153 opened on Aug 11, 2020 by ivan-aksamentov

Warn when clade-defining mutations fall to missing nucleotides prio:high t:bug t:feat
#153 opened on Aug 11, 2020 by ivan-aksamentov

## Shannon entropy of a mutation

The entropy of each mutation is stored in the auspice JSON file format. To obtain that data, save the results with “Export to auspice”, and load the file on auspice.us. The Shannon entropy of the mutation, together with other data, will appear at the bottom.

# Documentation

## CSV format for primer files
Which file formatting is expected for custom primer files?

https://github.com/nextstrain/nextclade/issues/333

## Can I upload multiple FASTA files at once?

The obvious way to supply more sequences would be concatenating several FASTA files into a single file. You can do so with any text editor.

Support uploading multiple FASTA files (not just one FASTA file contains multiple genomes) good first issue help wanted t:feat
#342 opened on Feb 12 by xzhub

## Web-based nextclade and nextstrain-augur report different results

The nextclade web interface assigns a genome to a different clade than the local nextstrain pipeline.

https://github.com/nextstrain/nextclade/issues/362

There are differences in how both instruments assign a sequence to the clade. While nextclade does so by computing phylogenetic distance, augur looks for signature mutations. Also, nextstrain-augur requires a diverse set of sequences in order to construct a reliable phylogenetic tree.

inconsistent columns in web and cli help wanted t:talk
#312 opened on Jan 25 by tolot27

## Firefox freezes with “too much recursion”

0.10.1 freezing in Firefox 84.0 with 'too much recursion' help wanted t:bug
#289 opened on Jan 3 by DrYak

## How can I stop Nextclade?

Add ability to cancel current task good first issue help wanted t:feat
#91 opened on Jul 3, 2020 by ivan-aksamentov

## Nextclade fails to parse all sequences

Nextclade web tool failed to parse out all submitted sequences t:ask
#273 opened on Nov 23, 2020 by Shufan-uga

## Input files don’t parse correctly

Detect and report input file parsing errors help wanted prio:medium t:bug
#88 opened on Jul 3, 2020 by ivan-aksamentov

## Is there a way to render previously exported results? Can I save the results as a standalone HTML file?

Add ability to render previously exported results t:feat
#211 opened on Sep 24, 2020 by ivan-aksamentov

rendering a single/monolithic offlineable html file good first issue help wanted t:feat
#283 opened on Dec 22, 2020 by dpark01

## Can I save the input parameters along with the results?

Save input parameters along with exported results prio:high t:feat
#212 opened on Sep 24, 2020 by ivan-aksamentov
