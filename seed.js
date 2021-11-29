import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
export const blogs = [
  {
    id: "39d56bba-170f-43b7-a1df-dc75e7055161",
    title: "The Plan for React 18. The React team is excited to share a few updates",
    body: `The React team is excited to share a few updates:

We’ve started work on the React 18 release, which will be our next major version.
We’ve created a Working Group to prepare the community for gradual adoption of new features in React 18.
We’ve published a React 18 Alpha so that library authors can try it and provide feedback.
These updates are primarily aimed at maintainers of third-party libraries. If you’re learning, teaching, or using React to build user-facing applications, you can safely ignore this post. But you are welcome to follow the discussions in the React 18 Working Group if you’re curious!

What’s coming in React 18
When it’s released, React 18 will include out-of-the-box improvements (like automatic batching), new APIs (like startTransition), and a new streaming server renderer with built-in support for React.lazy.

These features are possible thanks to a new opt-in mechanism we’re adding in React 18. It’s called “concurrent rendering” and it lets React prepare multiple versions of the UI at the same time. This change is mostly behind-the-scenes, but it unlocks new possibilities to improve both real and perceived performance of your app.

If you’ve been following our research into the future of React (we don’t expect you to!), you might have heard of something called “concurrent mode” or that it might break your app. In response to this feedback from the community, we’ve redesigned the upgrade strategy for gradual adoption. Instead of an all-or-nothing “mode”, concurrent rendering will only be enabled for updates triggered by one of the new features. In practice, this means you will be able to adopt React 18 without rewrites and try the new features at your own pace.

A gradual adoption strategy
Since concurrency in React 18 is opt-in, there are no significant out-of-the-box breaking changes to component behavior. You can upgrade to React 18 with minimal or no changes to your application code, with a level of effort comparable to a typical major React release. Based on our experience converting several apps to React 18, we expect that many users will be able to upgrade within a single afternoon.

We successfully shipped concurrent features to tens of thousands of components at Facebook, and in our experience, we’ve found that most React components “just work” without additional changes. We’re committed to making sure this is a smooth upgrade for the entire community, so today we’re announcing the React 18 Working Group.

Working with the community
We’re trying something new for this release: We’ve invited a panel of experts, developers, library authors, and educators from across the React community to participate in our React 18 Working Group to provide feedback, ask questions, and collaborate on the release. We couldn’t invite everyone we wanted to this initial, small group, but if this experiment works out, we hope there will be more in the future!

The goal of the React 18 Working Group is to prepare the ecosystem for a smooth, gradual adoption of React 18 by existing applications and libraries. The Working Group is hosted on GitHub Discussions and is available for the public to read. Members of the working group can leave feedback, ask questions, and share ideas. The core team will also use the discussions repo to share our research findings. As the stable release gets closer, any important information will also be posted on this blog.

For more information on upgrading to React 18, or additional resources about the release, see the React 18 announcement post.

Accessing the React 18 Working Group
Everyone can read the discussions in the React 18 Working Group repo.

Because we expect an initial surge of interest in the Working Group, only invited members will be allowed to create or comment on threads. However, the threads are fully visible to the public, so everyone has access to the same information. We believe this is a good compromise between creating a productive environment for working group members, while maintaining transparency with the wider community.

As always, you can submit bug reports, questions, and general feedback to our issue tracker.

How to try React 18 Alpha today
New alphas are regularly published to npm using the @alpha tag. These releases are built using the most recent commit to our main repo. When a feature or bugfix is merged, it will appear in an alpha the following weekday.

There may be significant behavioral or API changes between alpha releases. Please remember that alpha releases are not recommended for user-facing, production applications.

Projected React 18 release timeline
We don’t have a specific release date scheduled, but we expect it will take several months of feedback and iteration before React 18 is ready for most production applications.

Library Alpha: Available today
Public Beta: At least several months
Release Candidate (RC): At least several weeks after Beta
General Availability: At least several weeks after RC
More details about our projected release timeline are available in the Working Group. We’ll post updates on this blog when we’re closer to a public release.`,
    imageUrl: "https://picsum.photos/600/400?random=1",
    imageAlt: "React 18 is comming",
    createdDate: new Date(),
  },
  {
    id: "cb258c14-1e24-4d4e-800a-8a7ce00be9b5",
    title: "Market Reaction to Exchange Listings of Cryptocurrencies",
    body: `The market for cryptocurrencies has developed steadily since its inception in 2009. Thousands of currencies currently exist and are traded on crypto exchanges. In contrast to traditional markets, however, these currencies cannot be assigned any clear characteristics. For example, these include currencies, vouchers, software licenses or securities that are traded as blockchain-based assets. This broad range of underlying values and possible uses make as uniform regulation difficult. While cryptocurrency markets and exchanges show clear similarities to traditional financial markets, they are by no means regulated to the same extent. This leads to crypto exchanges, for example, reporting their trading volume incorrectly in order to suggest liquidity or informed trading in Bitcoin markets.

In the article “Market Reaction to Exchange Listings of Cryptocurrencies” I examine effects of 327 exchange listings of 180 different cryptocurrencies on 22 exchanges. On the one hand, a general overview of the phenomenon should be provided and on the other hand, potential signs of informed trading should be identified. The investigation is carried out using event study methodology, which allows to calculate so-called abnormal returns. Basically, one takes an observation period before the period to be examined around an event and calculates how an asset normally behaves. If one now calculates the return in the period to be observed around an exchange listing and sets it in relation to the normal behavior of the asset, one can calculate the abnormal return. Additionally, I extend the model to control that negative or positive effects were not caused by price developments of Bitcoin. Since the methodology requires an existing price history, I could only examine cross-listings of assets that had already been tradable on other exchanges for at least 30 days.

The results for the overall market show that on the day of listing a highly significant average positive abnormal return of 5.7% is achieved. If the time window is extended to three days before to three days after the event (-3, +3), the abnormal return is 9.2%. In the period (‑3, ‑2) in which the market should have no knowledge of the upcoming event, highly significant positive abnormal returns of 3.2% are identified. This is a clear indication that informed trading is taking place.

I break down this evaluation on each of the 22 crypto exchanges to find out how effects differ for individual exchanges. Extreme differences are identified. Over the entire 7-day event window (-3, +3), only five exchanges recorded significant positive returns. For six exchanges, effects are even negative. The significant positive effects on the day of listing are largely distributed among some exchanges, such as Binance (14.7%), Bitfinex (25.5%), Bittrex (23.5%) or Bithump (5.1%), while listings on other exchanges even lead to significantly negative returns (e.g. Gate.io – 4.5%; Bibox – 3.6%). Signs of informed trading are also only apparent for certain exchanges. Further analyses show that country characteristics, comparatively lower trading volume and lower asset market capitalization are relevant determinants of listing success.

The study has several implications. It identifies that the low level of regulation of the market is exploited in the form of informed trading. Regulators should see this as a starting point. In addition, the results can be used by cryptocurrency traders or projects to evaluate where listings have positive (or negative) price effects. For cryptocurrency exchanges, the results provide indications that information may leak or which form of assets leads to comparatively higher listing returns. In the article I list several potential avenues for future research.

`,
    imageUrl: "https://picsum.photos/600/400?random=2",
    imageAlt: "Market Reaction to Exchange Listings of Cryptocurrencies",
    createdDate: new Date(),
  },
  {
    id: "7c1c0869-0479-488a-b1db-c5eaa6f8dd93",
    title:
      "A Place Next to Satoshi – Scientific Foundations of Blockchain and Cryptocurrency in Business and Economics",
    body: `Blockchain technology has developed into a far-reaching phenomenon that affects all industries and sectors over the last few years. While Bitcoin or currency is the first application of the technology, the vision is different. The technology offers the potential to become a basic technology, which is the basis for a multitude of applications. While it is obvious that such a technical topic will first be taken up by computer scientists, the academic literature in the fields of business, economics and finance has discovered the topic for itself and at the present time a number of studies, empirically and theoretically, have been published.

The aim of this study is to identify the basic research foundations of blockchain and cryptocurrencies in business and economics using bibliometric analysis. This is done by co-citation analysis in the form of factor analysis, which prevents possible subjectivity of a literature review. In addition, it will be identified how research directions are related to each other via social network analysis. After considering the research streams and the actual articles, research gaps and potential research paths will be identified.

Five streams are identified:



The first and biggest stream deals with market efficiency of cryptocurrencies and accounts for 36.65% of variance. The second stream (12.15% variance) deals with asset valuation and price formation, while the third stream (5.52% variance) deals with the principles of blockchain and its application. In the fourth stream (5.04% variance), special properties of cryptocurrency transactions, such as anonymity or irreversibility and their regulatory implications are discussed. Lastly, the fifth stream accounts for 3.73% of variance and deals with monetary theory and policy, like the suitability of Bitcoin to be(come) a currency.

The visualization of the interrelations of the most relevant publications provides further insights:



This study analyses the scientific basis of the existing literature in the field of blockchain technology and cryptocurrency using quantitative methodology, which enables a neutral and objective evaluation. Research streams with the highest thematic relevance were identified and their underlying content and approaches presented. The results provide a scientific basis for researchers working on topics that can be assigned to the five research streams. Characteristic publications can be identified, which may be suitable as a thematic or methodological basis or point to new research directions. Interrelations between discourses show that this young field of research still leaves a lot of room for manoeuvre. On the basis of the analysis, various future research directions are pointed out. Researchers are currently still in a position to carry out fundamental work that shapes own, emerging or existing discourses in the field. There is still free scientific space to occupy beside Nakamoto (2008).


`,
    imageUrl: "https://picsum.photos/600/400?random=3",
    imageAlt:
      "A Place Next to Satoshi – Scientific Foundations of Blockchain and Cryptocurrency in Business and Economics",
    createdDate: new Date(),
  },
  {
    id: "9bf36e5c-a2c1-417b-94ff-edd6e0c13388",
    title: "Voluptate minim labore quis sint adipisicing.",
    body: `Aliqua elit fugiat ex tempor nostrud proident. Culpa irure amet adipisicing consequat cupidatat sint. Adipisicing duis voluptate sit cupidatat ad incididunt dolor qui aliquip consequat laborum aute aliquip sit. Anim sint nulla mollit nulla. Est consequat quis sunt deserunt occaecat cupidatat. Ut consectetur aliqua nostrud culpa ex ea quis nostrud excepteur minim labore est.

Incididunt amet tempor officia nisi minim deserunt enim anim irure reprehenderit qui culpa. Consectetur et consequat culpa dolor aute minim in minim Lorem ullamco anim eu. Minim exercitation nostrud incididunt irure cillum aliqua exercitation. Sunt duis deserunt cillum proident aute mollit tempor veniam labore cillum exercitation consectetur pariatur ullamco. Do sint sint eu cillum fugiat voluptate nulla amet amet aliqua do consequat ipsum. Incididunt deserunt cupidatat nulla aute amet dolore aliquip nulla Lorem ullamco non. Excepteur nisi culpa laboris ullamco officia consectetur dolor.

Enim nisi consequat sint ut veniam cillum esse veniam ea anim reprehenderit sunt. Consectetur culpa adipisicing minim minim cupidatat ullamco minim do. Commodo sunt laboris reprehenderit esse amet voluptate irure nostrud in.

Incididunt id velit do deserunt nulla amet. Minim et amet proident sit consectetur commodo consectetur ullamco consectetur irure dolore ipsum laboris veniam. Et reprehenderit ex enim eu consequat proident incididunt culpa aliquip ut consectetur. Incididunt aute quis nisi velit labore. Excepteur ut quis adipisicing incididunt. Labore adipisicing amet sint fugiat aute mollit commodo incididunt culpa duis.Culpa officia nulla ad do nostrud ipsum aute fugiat elit duis eu in nostrud. Culpa ullamco qui aute magna eu exercitation et sit consectetur esse proident nulla sint. Voluptate est commodo elit consectetur irure eiusmod nulla et mollit mollit non tempor dolore. Sunt do cillum minim incididunt proident officia aute fugiat sunt deserunt occaecat quis in ex. Occaecat quis in ex quis consequat ut pariatur voluptate sit dolore in laboris. Ullamco pariatur aliquip laborum exercitation elit dolore non consectetur.

Id fugiat quis magna qui enim pariatur esse sint duis. Pariatur nostrud velit aliqua dolor esse do voluptate do do labore. Eiusmod Lorem minim labore excepteur elit laborum duis reprehenderit voluptate.

Nulla qui id veniam enim nulla excepteur aliqua officia voluptate velit enim exercitation in. Exercitation aliquip excepteur laborum sunt exercitation id cupidatat nulla. Pariatur deserunt qui excepteur nostrud nostrud ex est irure. Incididunt eu incididunt do nostrud esse commodo proident sunt consectetur. Irure cupidatat excepteur magna eu eu enim laboris. Laborum cupidatat pariatur tempor aliqua.

Minim sit enim labore est cupidatat consectetur et culpa minim. Anim dolor occaecat ex et Lorem laboris amet culpa. Minim ex laborum cillum do deserunt laboris fugiat.
`,
    imageUrl: "https://picsum.photos/600/400?random=4",
    imageAlt: "Voluptate minim labore quis sint adipisicing.",
    createdDate: new Date(),
  },
  {
    id: "7eec6167-e620-4cdf-b598-259c901c5ebc",
    title: "Nulla culpa fugiat velit eiusmod consequat esse commodo anim aliquip.",
    imageAlt: "Non Lorem quis labore ipsum aliqua sunt aliqua eiusmod laborum reprehenderit.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    createdDate: new Date(),
    body: `Aliqua Lorem ad est adipisicing labore veniam do dolore tempor pariatur esse ea minim. Eiusmod velit quis aliquip occaecat. Irure aliqua cupidatat officia excepteur voluptate nostrud consectetur ea sunt ullamco duis reprehenderit eiusmod id. Anim quis occaecat id Lorem excepteur aliqua mollit voluptate et anim duis tempor.

Tempor culpa veniam elit id enim id. Reprehenderit aliquip duis sit ad. Ea ea pariatur ad ex labore aute sint in ipsum eu ex est sunt. In nisi minim anim aliqua dolore incididunt consequat enim eiusmod commodo consequat. Deserunt in est incididunt aliquip do sunt esse amet do in anim nulla. Officia amet incididunt quis ullamco mollit ea qui proident in.

Dolore in amet culpa occaecat proident occaecat aliquip elit ullamco adipisicing ea amet veniam id. Amet ex ea ex sunt consectetur excepteur irure ea labore adipisicing quis. Nostrud laborum quis consectetur ea sint sit cillum aliquip exercitation labore. Non magna fugiat dolor consequat elit id cillum amet reprehenderit mollit velit quis labore commodo. Excepteur dolor irure adipisicing ut do. Reprehenderit nostrud officia est ut laboris Lorem duis laborum cupidatat.

Fugiat magna elit ullamco minim voluptate aliqua cillum aliquip aliquip enim esse. Tempor occaecat quis excepteur officia minim sit sint cillum et et dolor quis velit. Cupidatat Lorem commodo incididunt sunt sit tempor.

Consectetur elit reprehenderit aute laboris dolore fugiat. Fugiat pariatur aliquip do et laborum. Tempor ipsum enim deserunt esse qui occaecat consequat sunt dolor eiusmod labore. In officia fugiat cupidatat irure.

Laborum et ut in occaecat Lorem excepteur pariatur. Ut enim elit culpa enim consequat dolor consectetur mollit voluptate labore sint elit ullamco. Labore aliquip minim exercitation quis labore tempor tempor eu deserunt aliqua do magna. Culpa mollit aliqua et elit enim deserunt veniam occaecat et proident pariatur. Aliqua eiusmod aute id irure in nulla laboris ut esse sint laboris. Reprehenderit duis tempor amet non ullamco consectetur occaecat veniam voluptate incididunt magna nostrud anim.

Irure deserunt amet labore ipsum laboris. Duis dolor reprehenderit qui in est labore tempor irure pariatur. Enim aute magna non labore reprehenderit laboris voluptate. Tempor exercitation pariatur eiusmod deserunt id id. Minim aliqua elit eu ex reprehenderit cupidatat ut est sit eiusmod. In exercitation eu officia culpa anim laborum velit sint laboris et sunt. Aliqua Lorem mollit voluptate aliqua magna non eu Lorem id est pariatur.

Elit irure labore reprehenderit nostrud non est ipsum esse. Ea pariatur exercitation ipsum fugiat minim nulla cupidatat. Quis aliquip voluptate labore amet. Dolore sit quis do incididunt duis deserunt consequat consequat reprehenderit id. Culpa elit aliqua tempor tempor labore mollit ipsum occaecat aliqua voluptate tempor sit in esse. Sint laboris non ad reprehenderit deserunt exercitation exercitation. Aute consectetur consectetur quis exercitation sit ex pariatur et ullamco ullamco non quis reprehenderit aliqua.`,
  },
  {
    id: "9a0c9c25-07ab-4d75-ac0a-6bb7e4094c0c",
    title: "Est esse officia id labore excepteur Lorem ex incididunt ex sit aliqua.",
    imageAlt: "Reprehenderit duis Lorem est nulla exercitation do fugiat.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    createdDate: new Date(),
    body: `Ex cillum esse esse do magna dolor non. Ipsum consectetur magna do est consequat commodo reprehenderit labore minim. Ipsum ut dolore ad adipisicing non eu dolore cillum ex irure commodo occaecat dolore. Do sit nisi qui elit culpa fugiat aliqua aliquip sint do nostrud adipisicing. Qui eu proident eu velit elit dolore aliqua aute esse proident eu est.

Non proident aute amet commodo quis veniam. Ipsum dolor irure aliquip sit. Sunt mollit quis ut aute ullamco elit do culpa. Dolor ad ad est voluptate dolor duis sint.

Esse quis anim minim Lorem do veniam Lorem aliqua amet Lorem dolor minim. Laborum deserunt occaecat proident eiusmod laborum. Reprehenderit tempor ut aliqua esse. Exercitation Lorem sit commodo qui et. Reprehenderit est ipsum aliqua anim in non aliqua cillum elit consequat reprehenderit consequat. Est eu et non dolore exercitation officia adipisicing minim aliquip amet quis id consequat occaecat.

Ullamco sunt non enim sit. Cupidatat laboris dolore occaecat ex elit aliqua adipisicing. Enim sint ex nostrud anim velit proident laborum laboris voluptate adipisicing. Ad voluptate elit minim excepteur. Consectetur ut minim esse in in ea velit elit duis.

Nisi id nulla ut velit laborum aute excepteur exercitation anim adipisicing reprehenderit laborum. Et minim labore non excepteur. Irure magna cupidatat sit id id deserunt exercitation cupidatat do do ex officia quis consequat. Amet deserunt mollit mollit consequat nisi mollit fugiat aliquip mollit commodo.

Quis et fugiat quis sit. Ut laborum anim dolor anim qui excepteur laboris tempor. Duis excepteur voluptate laborum reprehenderit aliquip est esse est officia mollit eiusmod laboris anim. Id id consectetur laborum duis tempor laborum nostrud nisi culpa aliqua eiusmod.

Velit quis pariatur consequat consequat ea dolor tempor amet dolore irure ex. Consectetur laborum commodo eiusmod dolor aliqua nulla sint aliquip labore consectetur aute sunt. Anim amet adipisicing eiusmod commodo reprehenderit incididunt dolore adipisicing cillum sunt officia non. Esse aute mollit deserunt commodo amet ea mollit fugiat.

Qui sint sit ipsum qui minim. Irure aute aute enim cillum adipisicing ipsum irure consectetur qui exercitation Lorem enim non. Ea aliqua officia sunt irure.

Excepteur ullamco cupidatat magna labore velit non pariatur elit incididunt cupidatat. Officia aute anim velit cillum sint cupidatat est. Duis proident reprehenderit dolor ex ut eu sint nostrud cillum dolore consequat elit nulla magna. Ut id Lorem ut adipisicing.`,
  },
  {
    id: "73ab436d-c802-48f2-94a6-492ab6659acb",
    title: "Laborum dolore officia consequat quis nostrud.",
    imageAlt: "Quis exercitation reprehenderit sit aliquip minim sit ut incididunt.",
    imageUrl: "https://picsum.photos/600/400?random=7",
    createdDate: new Date(),
    body: `Et deserunt quis pariatur duis Lorem exercitation culpa irure sunt nisi proident. Enim dolor nisi consectetur aliqua Lorem dolor non eu in dolore laborum laboris reprehenderit ut. Duis Lorem ullamco velit pariatur proident officia. Culpa qui minim eu ipsum voluptate. Nostrud tempor ipsum eiusmod elit.

Qui labore adipisicing nisi eu culpa fugiat nulla sit. Incididunt quis quis anim ea proident mollit quis sint reprehenderit. Consequat sint fugiat exercitation aliqua sit exercitation sint officia magna ex mollit commodo commodo nulla.

Sit incididunt excepteur fugiat est sit culpa eu commodo voluptate. Sint esse deserunt in id sunt duis consectetur voluptate amet occaecat eu ullamco dolore elit. Consectetur amet consequat irure aliquip reprehenderit. Laboris elit cupidatat ut dolore laboris exercitation culpa. Pariatur est eu ad fugiat consectetur dolor et aliqua ad in pariatur occaecat id. Ullamco culpa sint tempor voluptate. Sint sint incididunt occaecat minim aliqua incididunt fugiat.

Commodo non do incididunt incididunt labore exercitation. Consectetur commodo deserunt adipisicing sunt ad eu id sit in tempor exercitation consequat sit ut. Incididunt enim velit aliqua do. Esse esse id commodo reprehenderit exercitation ex. Proident ex ullamco Lorem elit eiusmod.

Adipisicing eiusmod cillum sint officia consequat sint enim laboris labore ex. Elit tempor eu commodo amet officia sint eu consequat non amet laboris aliqua. Eiusmod consectetur officia ea do incididunt aliquip ullamco fugiat consequat duis laboris nostrud. Do cupidatat labore duis quis tempor labore aliquip. Irure ex aliqua pariatur officia voluptate.

Nisi labore ut nulla ad commodo anim non officia non eu minim qui velit. Id ea adipisicing et laboris fugiat sint pariatur mollit occaecat magna ea commodo laborum dolor. Tempor labore ullamco pariatur irure occaecat Lorem.

Non velit labore reprehenderit ad magna excepteur minim non elit officia. Excepteur qui est ea culpa. Adipisicing quis aute aute voluptate amet velit duis consectetur occaecat magna laboris eiusmod. Occaecat ex excepteur id nulla veniam officia ut aliquip duis cillum velit. Ea nisi culpa laborum Lorem est cupidatat labore do irure commodo tempor voluptate culpa. Consequat fugiat in esse veniam nostrud reprehenderit in sit.

Laborum nostrud nulla mollit est anim reprehenderit qui laboris labore deserunt laboris irure. Magna officia eu eiusmod veniam ut quis adipisicing reprehenderit. Veniam commodo cillum ut velit reprehenderit ea non labore esse eu do mollit. Esse ut officia sint exercitation laborum consectetur ullamco aute voluptate. Est culpa exercitation do esse aliqua ipsum.

Proident adipisicing enim laborum ut velit et cillum aliqua magna sunt mollit et deserunt fugiat. Commodo mollit sunt consectetur officia aliquip id nostrud in consequat non aute in. Dolore excepteur sunt exercitation cupidatat et id aliquip laborum incididunt deserunt ex occaecat. Nisi qui pariatur sit sit sint in qui Lorem qui adipisicing excepteur aliqua reprehenderit.`,
  },
  {
    id: "f4998292-c829-4a10-b67d-48945e986621",
    title: "Minim occaecat culpa occaecat sit quis velit non ipsum consequat magna aute ullamco laborum.",
    imageAlt: "Proident quis eiusmod velit aliqua ipsum ea esse culpa elit reprehenderit sint deserunt adipisicing ex.",
    imageUrl: "https://picsum.photos/600/400?random=8",
    createdDate: new Date(),
    body: `Occaecat aliqua magna nostrud sint aute laboris ex ut culpa excepteur minim ad officia. Nostrud magna in aliquip cillum aliqua mollit labore. Labore anim esse est cillum eiusmod id in veniam ipsum irure in. Ea et quis dolore in deserunt. Dolore Lorem commodo commodo consequat.

Aliquip sint non proident quis proident. Cupidatat duis elit laboris excepteur aliquip magna occaecat anim ad officia ut cillum in. Commodo cupidatat commodo ad aute sit dolore nulla magna. Incididunt Lorem dolor irure reprehenderit qui magna duis nulla incididunt ut. Mollit adipisicing ipsum elit pariatur aliquip non eiusmod reprehenderit et culpa excepteur. Dolor duis sint ex mollit.

Consectetur consectetur cupidatat dolore commodo. Ipsum ad velit eiusmod nisi do amet do aliquip id mollit exercitation. Mollit adipisicing reprehenderit veniam consectetur incididunt labore ullamco. Eiusmod dolore dolore pariatur laboris cillum sunt anim tempor. Id nisi dolore elit ex in do magna fugiat est enim amet minim. Sunt ad irure tempor voluptate excepteur qui pariatur consectetur ullamco consequat in aliqua do ea.

Ad aute pariatur do officia occaecat id magna esse tempor eu quis ut. Aliquip cillum anim dolore ad ut fugiat labore. Sit laboris commodo fugiat velit consectetur qui tempor eu cupidatat incididunt cillum nisi dolore. Veniam quis nostrud nisi velit cupidatat duis. Consequat quis aliquip ea quis consequat consectetur aute laboris consequat. Consequat laborum officia magna irure fugiat culpa do non. Magna anim minim mollit ad qui esse Lorem enim tempor ea culpa.

Est ad nulla nostrud enim dolor. Labore irure quis sit amet occaecat incididunt in adipisicing aliquip reprehenderit excepteur ea sint. Veniam nisi deserunt non id ex. Ullamco amet et do qui mollit quis et ullamco ea cillum in dolore voluptate. Ea est irure fugiat cupidatat incididunt est mollit eiusmod. Deserunt nostrud Lorem ullamco cillum quis sint. Magna nulla excepteur esse velit pariatur in non Lorem minim laborum exercitation tempor pariatur aute.

Est irure mollit anim eiusmod dolore et laboris eiusmod dolor officia. Cillum ipsum incididunt officia voluptate adipisicing pariatur consectetur excepteur. Minim laboris velit ad cillum magna duis. Culpa Lorem mollit commodo Lorem aute eiusmod.

Aliqua tempor do nulla pariatur nulla aliqua do ea eiusmod veniam. Proident culpa ipsum quis deserunt in deserunt aliqua minim exercitation excepteur nulla veniam. Velit aliquip ipsum eiusmod veniam officia eiusmod cillum ex Lorem in. Cupidatat velit nisi excepteur cillum reprehenderit tempor labore. Aute occaecat quis do dolor est non ea est aliquip.

Proident est id mollit minim sit exercitation pariatur esse officia qui. Officia mollit voluptate elit incididunt excepteur ullamco irure qui consequat qui sit mollit. Minim magna cupidatat culpa aliqua do quis est sit esse exercitation id labore voluptate. Elit eiusmod magna mollit deserunt labore voluptate eiusmod nostrud ad pariatur esse. Occaecat labore quis minim proident tempor proident.

Nisi aliqua ipsum aliquip qui est ipsum nisi cupidatat aliquip eu pariatur consequat. Aliqua fugiat eiusmod velit Lorem incididunt labore ad Lorem pariatur duis veniam sint irure. Esse qui ex ipsum elit pariatur Lorem voluptate exercitation quis nostrud labore enim. Non anim nostrud occaecat duis. Lorem duis irure velit sit ea dolor.`,
  },
  {
    id: "cf7c43c7-c8e7-457f-aed0-562cebc5e7da",
    title: "Velit ad non amet pariatur ut eu cupidatat laborum tempor cupidatat.",
    imageAlt: "Sint dolor sunt mollit consectetur sit aliquip ad id irure ipsum anim.",
    imageUrl: "https://picsum.photos/600/400?random=9",
    createdDate: new Date(),
    body: `Anim ullamco in officia culpa eiusmod ullamco duis id aliqua. Esse veniam culpa deserunt nulla ex magna adipisicing non sint. Exercitation excepteur pariatur aliquip occaecat eu labore excepteur aliqua consequat id. Voluptate duis velit laborum qui ad. Laboris est tempor commodo eiusmod officia. Velit fugiat amet et et voluptate nulla laboris Lorem ut cupidatat ullamco aute non minim.

Do pariatur elit ullamco aliqua officia incididunt sunt culpa aliquip nostrud ex sit. Qui sit ullamco aliqua est exercitation irure commodo id labore esse anim cillum Lorem. Magna veniam aliqua voluptate sit consequat non mollit duis amet minim ipsum qui velit officia. Cupidatat dolore ut culpa magna commodo et. Enim laborum elit et dolore Lorem voluptate fugiat minim consequat sint. Do laborum sint aliquip laborum ex ut adipisicing pariatur aute.

Velit ex velit ea nisi eu non deserunt elit. Cupidatat id sint in adipisicing deserunt anim deserunt dolore exercitation ut enim. Ea laborum elit cupidatat consectetur fugiat ullamco esse est non fugiat adipisicing do mollit. Aliquip sit officia reprehenderit veniam exercitation nulla. Laboris veniam dolore commodo ipsum.

Consequat velit eiusmod sunt nulla id sunt id et dolor ullamco deserunt nulla ipsum. Amet occaecat qui sit tempor. Magna fugiat eiusmod irure sint labore nisi irure nostrud ipsum labore aute incididunt cupidatat. Quis magna cupidatat adipisicing est elit exercitation.

Ipsum sint esse est incididunt veniam consequat reprehenderit ullamco consectetur incididunt commodo dolore amet. Nostrud aliqua anim ex aliqua aute ipsum consequat nulla nostrud elit. Velit culpa aliquip labore occaecat dolore laborum reprehenderit dolore dolore id et. Eu esse tempor non culpa ut commodo do do. Minim elit quis enim exercitation. Non mollit culpa est aliqua quis.

Eu excepteur deserunt anim commodo cillum enim. Dolor fugiat ex qui occaecat officia adipisicing duis id minim eu pariatur quis aliqua ad. Quis voluptate exercitation amet Lorem incididunt ullamco non cupidatat dolore commodo eiusmod ut do. Sunt esse ea eiusmod reprehenderit ex cillum voluptate veniam minim cillum commodo esse qui.

Sit incididunt eu non ipsum eu deserunt consequat aliquip minim reprehenderit ea occaecat Lorem. Nulla adipisicing cillum commodo sit irure elit cillum officia proident. Ea pariatur magna velit labore.

Id duis dolore labore adipisicing irure eiusmod officia amet sint nostrud cupidatat tempor enim eu. Tempor nulla veniam aliquip ipsum consectetur velit. Enim ea culpa deserunt sit sunt enim duis nulla. Eu velit labore dolore quis commodo velit adipisicing ad nisi deserunt duis. Consequat nostrud ea incididunt occaecat consectetur duis. Est reprehenderit in dolore dolor laboris pariatur dolor culpa adipisicing proident. Eu adipisicing adipisicing duis proident.

Ut dolore cillum ullamco nostrud occaecat ut ea est sit est Lorem duis non. Velit qui in est proident aute sint quis anim mollit ea non. Non et tempor exercitation ullamco excepteur velit laboris ad aute. Cupidatat deserunt incididunt veniam enim commodo ullamco irure qui.`,
  },
  {
    id: "49cb35be-6914-4e24-825b-c403138e6b8e",
    title: "Occaecat dolore id elit nulla culpa consectetur officia ea proident culpa.",
    imageAlt: "Ut ut laborum consectetur laboris commodo.",
    imageUrl: "https://picsum.photos/600/400?random=10",
    createdDate: new Date(),
    body: `Pariatur duis excepteur esse minim culpa dolore nulla dolor non Lorem. Esse ex ad incididunt nisi. Sunt commodo dolor sunt incididunt irure amet sunt qui qui. Ullamco voluptate cillum mollit sunt eu consectetur occaecat deserunt magna proident elit minim. Aliquip culpa labore reprehenderit qui magna duis aute esse in.

Tempor exercitation cupidatat reprehenderit irure eiusmod id officia aute esse aute. Anim deserunt culpa qui consectetur. Deserunt enim minim laborum ea veniam proident velit laborum veniam dolor. Tempor tempor nulla labore eiusmod eiusmod do in pariatur occaecat.

Commodo tempor elit consequat nulla in incididunt Lorem dolor pariatur ipsum labore. Aliqua tempor aliqua et occaecat labore voluptate est. Ex eu magna enim irure nisi sunt et. Minim esse dolore dolore sunt. Lorem in labore proident adipisicing ipsum cillum ut eiusmod ut veniam duis reprehenderit. Ut occaecat dolor velit laborum culpa laboris enim culpa consequat. Voluptate aute magna id sint mollit anim irure ex velit occaecat elit mollit sit veniam.

Cillum laborum pariatur dolor incididunt ea. Minim officia veniam ea ex dolor occaecat consectetur. Ex exercitation nulla in mollit eu consequat nostrud elit aute quis aliqua.

Et labore tempor sunt est quis sint commodo amet incididunt. Duis laborum ex do elit quis nisi nulla laboris anim do enim. Aliquip do proident cillum labore commodo anim qui mollit sunt sit. Esse amet velit cillum amet mollit. Cillum ipsum eiusmod nulla esse mollit quis dolore voluptate nostrud nisi.

Laborum minim adipisicing aliqua pariatur adipisicing tempor. Cillum est et aliquip occaecat aliqua. Pariatur aliqua ipsum amet ut excepteur non culpa. Ullamco esse tempor exercitation laboris est cillum minim quis duis. Reprehenderit reprehenderit esse ad aute irure commodo.

Ipsum irure ex commodo fugiat velit Lorem. Aliquip in deserunt ut cillum ad commodo mollit cillum. Ea cillum aliquip enim veniam nostrud aute. Magna nisi laboris aliquip anim duis voluptate est id sit. Sunt excepteur consectetur aute do ipsum anim dolore irure fugiat dolor nisi mollit.

Nostrud mollit exercitation enim elit laborum sint. Pariatur veniam officia incididunt minim sit pariatur in ex. Do sunt incididunt eiusmod eu ex consequat aliquip quis dolore aliqua laboris. Labore excepteur magna nostrud minim exercitation tempor velit excepteur commodo Lorem excepteur. Aliqua occaecat duis aute occaecat commodo. Ullamco nisi excepteur Lorem proident est elit ullamco consequat fugiat in proident cillum nulla.

Nisi irure aliquip magna nulla laborum ea incididunt quis cillum veniam minim irure. Occaecat aliquip mollit amet enim do sit laboris duis sit incididunt laboris. Reprehenderit eiusmod ut aute nulla veniam. Sit ea nostrud ea aliquip. Ipsum tempor veniam commodo consectetur. Aliquip et velit aliqua reprehenderit officia.`,
  },
  {
    id: "0a03ca9b-849f-4b8b-b44a-e81aa68d1b28",
    title: "Est in reprehenderit excepteur consequat Lorem cupidatat labore aliqua sint nostrud dolore irure ut.",
    imageAlt: "Consectetur reprehenderit sunt pariatur labore.",
    imageUrl: "https://picsum.photos/600/400?random=11",
    createdDate: new Date(),
    body: `Occaecat aliquip quis tempor quis est duis id velit cillum ex consectetur nulla. Pariatur veniam ipsum quis nostrud incididunt voluptate et commodo consectetur reprehenderit est non consequat excepteur. Anim ea deserunt et irure enim ut. Nulla est qui consectetur reprehenderit do. Culpa anim ex dolor enim id culpa irure. Exercitation deserunt elit veniam ullamco occaecat eu deserunt magna enim dolore excepteur aliqua. Voluptate esse officia laborum labore in ad cupidatat in quis ex.

Nostrud nulla ipsum pariatur officia aute duis consequat ad ut proident consectetur. Et voluptate sunt quis nostrud culpa. Nulla aute do sint nulla ea fugiat sunt in culpa et sint veniam tempor. Excepteur labore sint reprehenderit deserunt nisi pariatur culpa exercitation laborum ullamco et deserunt. Cupidatat proident et irure id sit non mollit sit duis deserunt.

Pariatur ut tempor amet pariatur ipsum exercitation. Duis labore ad eu anim. Labore mollit cillum aliquip magna et anim ut et duis dolore nostrud. Velit occaecat ullamco exercitation elit. Lorem in laborum labore qui dolor excepteur enim id consectetur quis sit. Dolor nulla ut cillum esse. Eu do tempor esse pariatur excepteur aliqua esse.

Sunt id voluptate labore Lorem id. Aliquip velit consectetur velit duis amet. Est laborum eu pariatur quis quis commodo esse in commodo enim laboris anim laborum occaecat.

Irure fugiat voluptate irure laborum voluptate veniam cillum ex incididunt ullamco ullamco. Non est duis minim non. Et est nulla eu deserunt laboris velit officia aliquip ullamco veniam qui sunt. Eiusmod tempor qui quis laborum ad. Laboris consequat quis aliquip pariatur eiusmod ad laborum dolore enim.

Pariatur officia officia elit do proident aute. Enim fugiat fugiat enim nostrud minim enim anim eu nulla nulla ex labore. Qui eiusmod proident elit laboris sunt aliqua ea non esse labore. Tempor do est cillum eiusmod cillum ea in Lorem reprehenderit in irure do irure eiusmod. Qui proident ad laboris proident do in exercitation consectetur et pariatur aliqua consectetur occaecat ex. Pariatur fugiat dolor duis excepteur laborum proident ipsum voluptate ullamco.

Consequat ut do laboris irure non. Exercitation commodo et incididunt sunt excepteur mollit irure id incididunt aliquip quis nostrud adipisicing. Et duis mollit mollit sit in incididunt do consequat enim irure incididunt nulla.

Nostrud officia commodo aliquip occaecat ex laboris dolor id. Cupidatat ea aute officia laboris duis eiusmod laboris irure dolor labore laboris labore non. Do cillum duis eu culpa. Duis nostrud excepteur duis id tempor officia excepteur officia commodo aliqua amet consectetur ullamco est. Lorem minim ipsum cillum velit non ullamco ex aliquip eu excepteur voluptate.

Sit sint amet ex ea consequat exercitation. Aute cupidatat pariatur qui occaecat sint elit consectetur aliquip do. Eiusmod ut deserunt ea labore in laboris non sit cillum duis consectetur do est in. In sint magna pariatur occaecat culpa in cillum enim voluptate cillum amet id. Nisi aliquip ea sit fugiat minim aliqua.`,
  },
];

export async function seedDatabase() {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "blogs"));
  if (querySnapshot.empty) {
    blogs.forEach(async (item) => {
      try {
        const docRef = await addDoc(collection(db, "blogs"), item);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  }
}
