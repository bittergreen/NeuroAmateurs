---
title: Reward System
date: 2026-02-04
author: E涤狗
readingTime: 100 min
category: reward-system
tags: reward-system
summary: 尝试理解大脑的奖励机制吧。
---

https://en.wikipedia.org/wiki/Reward_system
## Intrinsic rewards vs Extrinsic rewards
	Associative Learning:
	extrinsic rewards -(classical conditioning)-> intrinsic rewards

### Motivational Salience:
very important. This is like the weight matrices in attention.
If form a tensor for summarization of each behavior/urges:
{0.01, 0.03, ...}
apply a matrix on that as "attention" or motivational salience matrix, then it's able to choose whether to do it or not.

#### Incentive salience vs Aversive Salience
Incentive salience(FOR WANTING/DESIRE):
Assigned to a stimuli by the nucleus accumbens

Liking and wanting are different things. In addiction, they can be very not like it but very much want it.
VTA -> Nucleus Accumbens
The _Ventral Striatum_ (the Nucleus Accumbens) is broadly involved in acquiring behavior when fed into by the VTA, and eliciting behavior when fed into by the PFC.

Incentive salience is the "wanting" or "desire" attribute, which includes a motivational component, that is assigned to a rewarding stimulus by the nucleus accumbens shell (NAcc shell). The degree of dopamine neurotransmission into the NAcc shell from the mesolimbic pathway is highly correlated with the magnitude of incentive salience for rewarding stimuli.

###### D1/D2
In the dorsal striatum, activation of D1 expressing MSNs produces appetitive incentive salience, while activation of D2 expressing MSNs produces aversion. In the NAcc, such a dichotomy is not as clear cut, and activation of both D1 and D2 MSNs is sufficient to enhance motivation

###### Craving
The transition of signals from the NAc to the DS allows reward associated cues to activate the DS without the reward itself being present. This can activate cravings and reward-seeking behaviors (and is responsible for triggering relapse during abstinence in addiction)

###### PFC
The VTA dopaminergic neurons project to the PFC, activating glutaminergic neurons that project to multiple other regions, including the Dorsal Striatum and NAc, ultimately allowing the PFC to mediate salience and conditional behaviors in response to stimuli

###### Hippocampus
The Hippocampus has multiple functions, including in the creation and storage of memories. In the reward circuit, it serves to contextual memories and associated cues. It ultimately underpins the reinstatement of reward-seeking behaviors via cues, and contextual triggers

#### Thoughts
There are intrinsic rewards and extrinsic rewards. You gotta learn the rewards as an agent. That is:
1. Build a system that has basic and comparatively stable reward signals
2. Make it capable of learning/associating things w/ this basic system outputs
3. Able to adjust the basic signal levels according to different settings


**Serotonin**: involved in aversive learning. It may play a role in regulating the trade-off between exploration and exploitation, and in representing the cost of effort.

**Acetylcholine (ACh) and Norepinephrine (NE):** are involved in signaling uncertainty. According to the theory of Yu and Dayan, ACh signals _expected_ uncertainty (i.e., known unreliability of cues), while NE signals _unexpected_ uncertainty (i.e., a sudden change in the environment). This allows the brain to adjust its learning rate and attention in response to changes in the environment.

- **States/Observations:** Your suggestion of sensory pathways is correct. The **OFC** is a key area for representing the current state within a learned "task space" or "cognitive map".
- **Policies:** The **vmPFC** is more associated with representing the _value_ of outcomes, which is used to guide the policy. The policy itself (the mapping from states to actions) is likely distributed across a network including the **dlPFC** (for goal-directed control) and the **basal ganglia** (for habitual control).
- **Actions:** The **motor system** is indeed responsible for executing actions, but the selection of which action to take is driven by the policy representations in the PFC and basal ganglia.
- **Trajectories:** The **hippocampus** is crucial here, not just for storing raw trajectories (episodic memory), but for learning predictive representations like the **successor representation**.
- **Rewards/Returns:** The **limbic system** is central. The **dopaminergic system** provides the crucial learning signal (RPE), while the **vmPFC** and other areas represent the value of expected outcomes.



### Games
Endorphins(内啡肽)的作用？
DA是否就那么两条pathway？

What I need to know is:
1. General knowledge about the reward system
2. General knowledge about the emotional system
3. General knowledge about RL
4. Neurotransmitters dopamine and endorphins
5. What is will and willpower?
6. What is motivation?
7. Why are we procrastinating?
8. What is the mental force that we experience when we "force" ourselves to do sth?
9. What is laziness?
10. What is ADHD?

Perfectionism as a 
obsessive-compulsive disorder (OCD), where the fear of making mistakes leads to avoidance.

Inaction inertia


### AI-gen
#### The Key Brain Networks Involved(AI gen, largely wrong)

Recent neuroimaging studies, particularly those using resting-state fMRI, have moved beyond looking at single brain regions and now focus on the interplay between large-scale brain networks. A "unified triple brain network model" has been proposed, which identifies three key networks in the context of procrastination: 2

1. 1.
   The Default Mode Network (DMN): This network is active when our minds wander and we're not focused on a specific task. It's involved in self-related thought and thinking about the past and future. In procrastinators, the DMN shows hyper-activity . This suggests that their minds are more prone to drifting away from the task at hand and toward more pleasant, immediate thoughts. 3
2. 2.
   The Cognitive Control Network (or Executive Control Network): This network, which includes the dorsolateral prefrontal cortex (dlPFC), is responsible for top-down control, planning, and goal-directed behavior. In procrastinators, this network shows weaker connectivity and a reduced ability to regulate the DMN. This "failure of top-down control" means the part of the brain responsible for keeping you on task is less effective at overriding the mind-wandering tendencies of the DMN. 3
3. 3.
   The Affective or Salience Network: This network, which includes the amygdala and insula, is involved in processing emotions and detecting personally relevant stimuli. In procrastinators, this network can be highly sensitive to the negative emotions associated with a difficult or boring task, further encouraging avoidance.

#### The Role of Episodic Future Thinking (EFT)
A growing area of research is focused on "Episodic Future Thinking" (EFT), which is our ability to mentally travel in time and imagine ourselves in the future. 5 This is a key cognitive process that helps us make decisions that benefit our future selves.

- Procrastinators and EFT: Procrastinators often have a weaker connection to their future selves. The future feels more abstract and disconnected, making it harder to prioritize long-term goals.
- Neural Basis of EFT: The ability to engage in EFT relies on the interaction between the cognitive control network and the DMN. When this interaction is weak, it's harder to vividly imagine the positive outcomes of completing a task or the negative consequences of delaying it. 5
#### A Neuro-Computational Account
A 2022 study in Nature Communications provided a neuro-computational model of procrastination. 1 They found that procrastination is not just about discounting future rewards, but also about how the brain represents the effort involved in a task.

- Effort Discounting: Their fMRI data showed that the brains of procrastinators are more sensitive to the immediate cost of effort. This means that the "pain" of starting a task is more heavily weighted than the future reward.
- The vmPFC and Value Calculation: The ventromedial prefrontal cortex (vmPFC) plays a crucial role in this process. It's involved in calculating the subjective value of different options by weighing the costs (like effort) against the benefits (like rewards). In procrastinators, the vmPFC seems to be biased toward options that require less immediate effort.


### Real 3 Systems about procrastination(From paper)
 - self-control network (i.e., dorsolateral prefrontal cortex, DLPFC)
 - emotion-regulation network (i.e., orbital frontal cortex, OFC)
 - episodic prospection network (i.e., para-hippocampus cortex, PHC)
 

### Structures(From paper)
#### ACC, dlPFC
- self control, planning
DLPFC and ACC constituted to hubs for cingulo-opercular network (CON), which functioned as self-control and self-regulation process
这个cingulo-opercular network就是salience network - 不是，见3systems


people with higher level of procrastination were related to less resting-state functional connectivity (rsFC) of anterior vmPFC in default mode network
procrastination was negatively predicted by vmPFC-DLPFC connection (Wu et al., 2016) (see Fig. 3A). Procrastination would occur when lacking adequate cognitive control towards emotions and task
不同的人有不同的系统，有的人default net特别强，就容易分心。但同时这可能和文学、艺术中的联想和创造能力有关。（需要进一步调研）
#### Insula
 - the hub of salience network
insula had been found to involve in encoding the negative (social) emotions and processing emotion-related external stimulus, such as moral judgement and social economic decision
marking emotional signals with negative labels.
#### OFC
 - played a crucial role in down-regulation for the negative emotions
  Notably, failure of emotion regulation was the essence of procrastination.
  As aforementioned, postponing intended tasks to the future was considered as a strategy to repair negative mood elicited by task
  比如说为啥不喜欢写论文？我多年教育经历导致我非常厌恶写这些东西。在没完成的过程中责备自己，会加剧这种情况。
#### PHC and vmPFC
 - PHC was clarified to function to episodic memory, cognitive processing and mental simulations, especially in the episodic prospection
This ability facilitated individuals to pre-experience the future scenarios by mental simulations, and could be accessible to pre-perceiving anticipated emotions
 - vmPFC
Rather than specific episodic memories, the major contribution vmPFC made in episodic prospection was to govern abstract mental simulations towards future outcome by self-referential knowledge, with high episodic prospection construct for far-sighted decision

high betweenness centrality in DLPFC and PHC in GM covariation connectome for procrastinators.
negative correlates of prefrontal-limbic white matter fibers to procrastination
这啥意思呢？就是说你想的太多就崩了。

马斯克成功？因为他一开始运气就很好，强化

#### vmPFC and dlPFC functional specifications
the vmPFC integrates emotional, reward-based, and outcome-related signals (e.g., from the amygdala and orbitofrontal cortex), often focusing on basic attributes like immediate pleasure or risk aversion. In contrast, the dlPFC handles more abstract, cognitive elements, such as long-term goals, probabilities, and strategic planning. For instance, in value-based choices (e.g., deciding whether to indulge in a tempting food), activity in both regions correlates with subjective value, but the vmPFC is more tied to emotional valuation while the dlPFC incorporates regulatory or abstract factors like health considerations.

#### putamen: "hate cirucuit"
Tentative studies have suggested that the putamen may play a role in the so-called "[hate](https://en.wikipedia.org/wiki/Hatred "Hatred") circuit" of the brain. A recent study was done by the department of cell and developmental biology at [University College London](https://en.wikipedia.org/wiki/University_College_London "University College London"). An [fMRI](https://en.wikipedia.org/wiki/FMRI "FMRI") was carried out on subjects while they viewed a picture of people they hated and people who were "neutral". During the experiment, a "hate score" was recorded for each picture. The activity in subcortical areas of the brain implied that the "hate circuit" involves the [superior frontal gyrus](https://en.wikipedia.org/wiki/Superior_frontal_gyrus "Superior frontal gyrus"), the putamen and the [insula](https://en.wikipedia.org/wiki/Insular_cortex "Insular cortex").[[17]](https://en.wikipedia.org/wiki/Putamen#cite_note-Tao-17) It has been theorized that the "putamen plays a role in the perception of [contempt](https://en.wikipedia.org/wiki/Contempt "Contempt") and [disgust](https://en.wikipedia.org/wiki/Disgust "Disgust"), and may be part of the [motor system](https://en.wikipedia.org/wiki/Motor_system "Motor system") that's mobilized to take action." It was also found that the amount of activity in the hate circuit correlates with the amount of hate a person declares, which could have legal implications concerning malicious crimes.[[18]](https://en.wikipedia.org/wiki/Putamen#cite_note-Zeki-18)


### Detailed Explanation of the Plan-Decision-Execution Network

Decision-making isn't confined to dlPFC and vmPFC; it's embedded in large-scale brain networks like the Central Executive Network (CEN, anchored in dlPFC), Default Mode Network (DMN, involving vmPFC), and Salience Network (SN, including dorsal anterior cingulate cortex or dACC and anterior insula). These networks orchestrate a multi-stage process for planning, deciding, and executing actions, integrating cognitive, emotional, and sensory inputs. Here's a breakdown:

1. **Detection of Salience and Initiation (Salience Network Role)**:
    - The process often starts with the SN detecting relevant stimuli (external events or internal goals) and signaling the need for action. The dACC, a key SN hub reciprocally connected to both dlPFC and vmPFC, monitors for conflicts or uncertainties and engages the appropriate network—switching from introspective DMN (vmPFC-dominant) to task-focused CEN (dlPFC-dominant). This prevents the linear model from applying rigidly, as salience can bias vmPFC toward emotional options early on.
2. **Planning and Option Generation (dlPFC-Led, with Network Support)**:
    - The dlPFC generates and holds potential plans in working memory, drawing on abstract reasoning and past experiences. It collaborates with parietal regions (e.g., PPC) for spatial and attentional aspects, and the dlPFC-vmPFC loop begins here, with vmPFC providing initial value cues to refine options (e.g., discarding low-reward plans). In social contexts, inputs from temporoparietal junction (TPJ) and superior temporal sulcus (STS) add perspective-taking or contextual details.
3. **Decision-Making and Value Integration (vmPFC-Led, with Feedback Loops)**:
    - The vmPFC evaluates options by integrating rewards, risks, and emotional signals (e.g., from the amygdala for fear or ventral striatum for motivation), often emphasizing negative outcomes to guide avoidance. The dlPFC modulates this by injecting cognitive overrides (e.g., long-term benefits), and the dACC resolves conflicts between competing values. In multi-attribute decisions (e.g., balancing cost, benefit, and ethics), vmPFC ensures consistency while dlPFC handles complexity. This stage is where behavioral control shifts occur, as described earlier.
4. **Execution and Monitoring (dlPFC and Motor Network Integration)**:
    - Once decided, the dlPFC oversees execution by maintaining the plan in working memory and inhibiting distractions, relaying signals to premotor and motor cortices for action. The basal ganglia (e.g., striatum) aid in action selection and habit formation, while the dACC monitors performance for errors, feeding back to adjust future plans. vmPFC influence persists here if emotional feedback (e.g., regret) arises, potentially triggering replanning.
# Hypothesis 1

Mental effort + aversive salience vs Incentive salience
