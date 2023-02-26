export const calculateGoal = (curentWeight: number, goalWeight: number, weightProgramme: string) => {
  const programmes: Record<string, string>= {
    '4 weeks': 'extreme',
    '12 weeks': 'weight',
    '6 month': 'weight',
    '6-12 month': 'mild'
  }
  const kilogramms: Record<string, string>= {
    'extreme': '4',
    'weight': '2',
    'mild': '1'
  }
  const program = programmes[weightProgramme]
  const kg = kilogramms[program]
  const weigthDifference = curentWeight - goalWeight;
  const duration = Math.abs(+weigthDifference / Number(kg))
  let goal = 'maintain'
  if (weigthDifference > 0) {
    goal = 'lose'
  } else {
    goal = 'gain'
  }
  
  const goalResults = {
    program,
    goal,
    duration
  }
  return goalResults
}