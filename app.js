
    /***************************************************************************
     * 1. DATA LAYER & CONSTANTS
     **************************************************************************/

    const ANIMATION_TEMPLATES = {
      chest_press_db: `
        <svg class="anim-chest-press" viewBox="0 0 100 100">
          <line x1="20" y1="65" x2="80" y2="65" class="anim-bench" />
          <line x1="45" y1="65" x2="45" y2="78" class="anim-path" />
          <line x1="45" y1="78" x2="52" y2="88" class="anim-path" />
          <line x1="28" y1="62" x2="68" y2="62" class="anim-path" style="stroke-width:5px;" />
          <circle cx="23" cy="62" r="5" class="anim-path" />
          <g class="press-group">
            <line x1="22" y1="36" x2="74" y2="36" class="anim-path-sec" />
            <circle cx="22" cy="36" r="6" class="anim-weight" />
            <circle cx="74" cy="36" r="6" class="anim-weight" />
            <line x1="38" y1="60" x2="38" y2="36" class="anim-path" />
            <line x1="58" y1="60" x2="58" y2="36" class="anim-path" />
          </g>
        </svg>
      `,
      pullup: `
        <svg class="anim-pullup" viewBox="0 0 100 100">
          <line x1="20" y1="22" x2="80" y2="22" class="anim-bench" />
          <g class="body-group">
            <circle cx="50" cy="36" r="6" class="anim-path" />
            <line x1="50" y1="42" x2="50" y2="64" class="anim-path" />
            <line x1="50" y1="64" x2="44" y2="80" class="anim-path" />
            <line x1="50" y1="64" x2="56" y2="80" class="anim-path" />
          </g>
          <line x1="44" y1="22" x2="44" y2="40" class="anim-path arm-l" />
          <line x1="56" y1="22" x2="56" y2="40" class="anim-path arm-r" />
        </svg>
      `,
      row: `
        <svg class="anim-row" viewBox="0 0 100 100">
          <line x1="15" y1="88" x2="85" y2="88" class="anim-bench" />
          <line x1="38" y1="88" x2="42" y2="68" class="anim-path" />
          <line x1="42" y1="68" x2="58" y2="46" class="anim-path" />
          <circle cx="64" cy="40" r="6" class="anim-path" />
          <line x1="58" y1="46" x2="46" y2="62" class="anim-path arm-group" />
          <g class="barbell-group">
            <line x1="46" y1="62" x2="46" y2="80" class="anim-path" />
            <line x1="26" y1="80" x2="66" y2="80" class="anim-path-sec" />
            <circle cx="26" cy="80" r="6" class="anim-weight" />
            <circle cx="66" cy="80" r="6" class="anim-weight" />
          </g>
        </svg>
      `,
      curl: `
        <svg class="anim-curl" viewBox="0 0 100 100">
          <line x1="20" y1="88" x2="80" y2="88" class="anim-bench" />
          <circle cx="48" cy="24" r="6" class="anim-path" />
          <line x1="48" y1="30" x2="48" y2="58" class="anim-path" />
          <line x1="48" y1="58" x2="42" y2="88" class="anim-path" />
          <line x1="48" y1="58" x2="54" y2="88" class="anim-path" />
          <line x1="48" y1="32" x2="48" y2="50" class="anim-path" />
          <g class="forearm-group">
            <line x1="48" y1="50" x2="62" y2="50" class="anim-path-sec" />
            <circle cx="64" cy="50" r="5" class="anim-weight" />
          </g>
        </svg>
      `,
      squat: `
        <svg class="anim-squat" viewBox="0 0 100 100">
          <line x1="20" y1="88" x2="80" y2="88" class="anim-bench" />
          <g class="legs-group">
            <line x1="42" y1="88" x2="40" y2="70" class="anim-path" />
            <line x1="58" y1="88" x2="60" y2="70" class="anim-path" />
            <line x1="40" y1="70" x2="46" y2="55" class="anim-path" />
            <line x1="60" y1="70" x2="54" y2="55" class="anim-path" />
          </g>
          <g class="upper-group">
            <line x1="46" y1="55" x2="50" y2="30" class="anim-path" />
            <circle cx="50" cy="24" r="6" class="anim-path" />
            <line x1="32" y1="32" x2="68" y2="32" class="anim-path-sec" />
            <circle cx="32" cy="32" r="6" class="anim-weight" />
            <circle cx="68" cy="32" r="6" class="anim-weight" />
            <line x1="50" y1="30" x2="42" y2="38" class="anim-path" />
            <line x1="50" y1="30" x2="58" y2="38" class="anim-path" />
          </g>
        </svg>
      `,
      shoulder_press: `
        <svg class="anim-shoulder-press" viewBox="0 0 100 100">
          <line x1="20" y1="88" x2="80" y2="88" class="anim-bench" />
          <circle cx="50" cy="30" r="6" class="anim-path" />
          <line x1="50" y1="36" x2="50" y2="66" class="anim-path" />
          <line x1="50" y1="66" x2="44" y2="88" class="anim-path" />
          <line x1="50" y1="66" x2="56" y2="88" class="anim-path" />
          <g class="press-group">
            <line x1="26" y1="34" x2="74" y2="34" class="anim-path-sec" />
            <circle cx="26" cy="34" r="6" class="anim-weight" />
            <circle cx="74" cy="34" r="6" class="anim-weight" />
            <line x1="38" y1="44" x2="38" y2="34" class="anim-path" />
            <line x1="62" y1="44" x2="62" y2="34" class="anim-path" />
          </g>
          <line x1="50" y1="38" x2="38" y2="44" class="anim-path" />
          <line x1="50" y1="38" x2="62" y2="44" class="anim-path" />
        </svg>
      `,
      tricep_ext: `
        <svg class="anim-tricep-ext" viewBox="0 0 100 100">
          <line x1="20" y1="88" x2="80" y2="88" class="anim-bench" />
          <circle cx="50" cy="24" r="6" class="anim-path" />
          <line x1="50" y1="30" x2="50" y2="60" class="anim-path" />
          <line x1="50" y1="60" x2="44" y2="88" class="anim-path" />
          <line x1="50" y1="60" x2="56" y2="88" class="anim-path" />
          <line x1="50" y1="34" x2="50" y2="48" class="anim-path" />
          <g class="forearm-group">
            <line x1="50" y1="48" x2="50" y2="64" class="anim-path-sec" />
            <circle cx="50" cy="65" r="5" class="anim-weight" />
          </g>
        </svg>
      `,
      lateral_raise: `
        <svg class="anim-lateral-raise" viewBox="0 0 100 100">
          <line x1="20" y1="88" x2="80" y2="88" class="anim-bench" />
          <circle cx="50" cy="24" r="6" class="anim-path" />
          <line x1="50" y1="30" x2="50" y2="62" class="anim-path" />
          <line x1="50" y1="62" x2="44" y2="88" class="anim-path" />
          <line x1="50" y1="62" x2="56" y2="88" class="anim-path" />
          <g class="arm-l">
            <line x1="44" y1="32" x2="28" y2="46" class="anim-path" />
            <circle cx="27" cy="47" r="4" class="anim-weight" />
          </g>
          <g class="arm-r">
            <line x1="56" y1="32" x2="72" y2="46" class="anim-path" />
            <circle cx="73" cy="47" r="4" class="anim-weight" />
          </g>
        </svg>
      `,
      deadlift: `
        <svg class="anim-deadlift" viewBox="0 0 100 100">
          <line x1="15" y1="88" x2="85" y2="88" class="anim-bench" />
          <line x1="36" y1="88" x2="36" y2="60" class="anim-path" />
          <g class="torso-group">
            <line x1="36" y1="60" x2="54" y2="44" class="anim-path" />
            <circle cx="58" cy="38" r="6" class="anim-path" />
            <g class="arm-group">
              <line x1="54" y1="44" x2="54" y2="66" class="anim-path" />
            </g>
          </g>
          <g class="barbell-group">
            <line x1="34" y1="66" x2="74" y2="66" class="anim-path-sec" />
            <circle cx="34" cy="66" r="7" class="anim-weight" />
            <circle cx="74" cy="66" r="7" class="anim-weight" />
          </g>
        </svg>
      `,
      crunch: `
        <svg class="anim-crunch-svg" viewBox="0 0 100 100">
          <line x1="10" y1="78" x2="90" y2="78" class="anim-bench" />
          <line x1="20" y1="78" x2="35" y2="60" class="anim-path" />
          <line x1="35" y1="60" x2="50" y2="78" class="anim-path" />
          <g class="anim-crunch">
            <line x1="50" y1="78" x2="77" y2="70" class="anim-path" />
            <circle cx="82" cy="65" r="5" class="anim-path" />
            <line x1="77" y1="70" x2="73" y2="58" class="anim-path" />
          </g>
        </svg>
      `,
      plank: `
        <svg class="anim-plank-svg" viewBox="0 0 100 100">
          <line x1="10" y1="78" x2="90" y2="78" class="anim-bench" />
          <g class="anim-plank">
            <line x1="20" y1="78" x2="22" y2="70" class="anim-path" />
            <line x1="70" y1="78" x2="70" y2="68" class="anim-path" />
            <line x1="70" y1="68" x2="74" y2="68" class="anim-path" />
            <line x1="22" y1="70" x2="74" y2="70" class="anim-path" style="stroke-width:4px;" />
            <circle cx="79" cy="67" r="5" class="anim-path" />
          </g>
        </svg>
      `
    };

    function getAnimationSVG(type) {
      return ANIMATION_TEMPLATES[type] || ANIMATION_TEMPLATES.chest_press_db;
    }

    // Complete Exercise Database
    const EXERCISES = [
      // Pecho
      { id: "press_plano_mancuernas", name: "Press plano con mancuernas", group: "Pecho", equipment: "Mancuernas", description: "Acostado boca arriba, empuja las mancuernas verticalmente desde el pecho extendiendo los codos. Mantené el control en el descenso.", animationType: "chest_press_db" },
      { id: "press_plano_barra", name: "Press plano con barra", group: "Pecho", equipment: "Barra", description: "El clásico de pecho. Acostado en banco plano, baja la barra de manera controlada hasta tocar el esternón y empuja hacia arriba.", animationType: "chest_press_db" },
      { id: "press_inclinado_mancuernas", name: "Press inclinado con mancuernas", group: "Pecho", equipment: "Mancuernas", description: "En un banco a 30-45 grados, empuja las mancuernas hacia arriba enfocando el esfuerzo en el pectoral superior.", animationType: "chest_press_db" },
      { id: "press_inclinado_barra", name: "Press inclinado con barra", group: "Pecho", equipment: "Barra", description: "Sentado en banco inclinado, baja la barra hasta la parte superior del pecho y empuja con potencia.", animationType: "chest_press_db" },
      { id: "press_inclinado_smith", name: "Press inclinado con Smith", group: "Pecho", equipment: "Máquina Multipower", description: "Press inclinado en máquina Smith para mayor estabilidad, aislando el trabajo en el pectoral superior.", animationType: "chest_press_db" },
      { id: "peck_deck", name: "Peck deck (contractora)", group: "Pecho", equipment: "Máquina", description: "Sentado, junta los brazos al frente de forma circular manteniendo los codos fijos para una máxima contracción del pectoral.", animationType: "lateral_raise" },
      { id: "flexiones_pecho", name: "Flexiones de pecho", group: "Pecho", equipment: "Peso corporal", description: "Ejercita pecho y tríceps con el peso de tu propio cuerpo en posición horizontal.", animationType: "chest_press_db" },
      { id: "pecho_alto_polea", name: "Pecho alto en polea", group: "Pecho", equipment: "Polea", description: "Realiza cruces con las poleas posicionadas abajo, llevando las manos hacia arriba y al centro para enfocar la parte superior.", animationType: "lateral_raise" },
      { id: "pecho_bajo_polea", name: "Pecho bajo en polea", group: "Pecho", equipment: "Polea", description: "Realiza cruces con las poleas altas, empujando hacia abajo y adelante para enfocar la porción inferior del pectoral.", animationType: "lateral_raise" },
      { id: "aperturas_mancuernas", name: "Aperturas con mancuernas", group: "Pecho", equipment: "Mancuernas", description: "Apertura en banco plano con ligera flexión de codos, sintiendo el estiramiento profundo del pectoral.", animationType: "lateral_raise" },
      { id: "pullover_mancuerna", name: "Pullover con mancuerna", group: "Pecho", equipment: "Mancuerna", description: "Acostado transversal sobre un banco, baja la mancuerna por detrás de la cabeza manteniendo los brazos semifijos.", animationType: "row" },

      // Espalda
      { id: "dominadas", name: "Dominadas", group: "Espalda", equipment: "Peso corporal", description: "Colgate de la barra y tira con tu espalda para subir tu barbilla por encima de ella. Mantén el descenso controlado.", animationType: "pullup" },
      { id: "dominadas_peso", name: "Dominadas con peso", group: "Espalda", equipment: "Lastre", description: "Dominadas tradicionales agregando un cinturón de lastre para progresión de fuerza extrema.", animationType: "pullup" },
      { id: "jalon_pecho_ancho", name: "Jalón al pecho (agarre ancho)", group: "Espalda", equipment: "Polea", description: "En polea alta, tira de la barra hacia la parte superior del pecho contrayendo los dorsales.", animationType: "pullup" },
      { id: "jalon_pecho_cerrado", name: "Jalón al pecho cerrado (supino)", group: "Espalda", equipment: "Polea", description: "Agarre cerrado invertido (supino), tirando de la barra al pecho enfocando el dorsal inferior y el bíceps.", animationType: "pullup" },
      { id: "remo_t", name: "Remo T (T-bar row)", group: "Espalda", equipment: "Barra T", description: "Con el torso inclinado a 45 grados, tira del peso hacia tu pecho pegando los codos a las costillas.", animationType: "row" },
      { id: "remo_sentado_polea", name: "Remo sentado en polea", group: "Espalda", equipment: "Polea", description: "Tira del cable hacia el abdomen manteniendo la espalda recta y retrayendo las escápulas al final.", animationType: "row" },
      { id: "remo_barra", name: "Remo con barra", group: "Espalda", equipment: "Barra", description: "Inclinado hacia adelante, tira de la barra hacia la zona del ombligo con codos a 45 grados.", animationType: "row" },
      { id: "peso_muerto", name: "Peso muerto", group: "Espalda", equipment: "Barra", description: "El rey de los ejercicios. Levanta la barra del suelo empujando con las piernas y enderezando la cadera y espalda.", animationType: "deadlift" },
      { id: "pullover_polea", name: "Pullover en polea", group: "Espalda", equipment: "Polea", description: "Con brazos rectos, empuja el cable hacia abajo enfocando la contracción únicamente en los dorsales.", animationType: "row" },
      { id: "remo_mancuerna", name: "Remo con mancuerna", group: "Espalda", equipment: "Mancuernas", description: "Apoyado en un banco, tira de la mancuerna hacia la cadera alternando los brazos.", animationType: "row" },
      { id: "hiperextensiones", name: "Hiperextensiones", group: "Espalda", equipment: "Banco romano", description: "Realiza una extensión del torso estabilizando con lumbares e isquiotibiales.", animationType: "deadlift" },

      // Hombros
      { id: "vuelos_laterales_mancuernas", name: "Vuelos laterales con mancuernas", group: "Hombros", equipment: "Mancuernas", description: "Eleva las mancuernas lateralmente hasta la altura de los hombros con una leve flexión de codo.", animationType: "lateral_raise" },
      { id: "vuelos_laterales_polea", name: "Vuelos laterales en polea", group: "Hombros", equipment: "Polea", description: "Eleva el cable de costado asegurando tensión constante en el deltoides lateral.", animationType: "lateral_raise" },
      { id: "press_militar_mancuernas", name: "Press militar con mancuernas", group: "Hombros", equipment: "Mancuernas", description: "Sentado o parado, empuja las mancuernas por encima de tu cabeza verticalmente.", animationType: "shoulder_press" },
      { id: "press_militar_barra", name: "Press militar con barra", group: "Hombros", equipment: "Barra", description: "Parado, empuja la barra verticalmente desde las clavículas por encima de la cabeza.", animationType: "shoulder_press" },
      { id: "posteriores_peck_deck", name: "Posteriores en peck deck", group: "Hombros", equipment: "Máquina", description: "Sentado al revés, empuja los brazos hacia atrás para trabajar la porción posterior del hombro.", animationType: "lateral_raise" },
      { id: "posteriores_polea", name: "Posteriores en polea", group: "Hombros", equipment: "Polea", description: "Cruces de poleas altas para deltoides posterior cruzando los brazos al frente.", animationType: "lateral_raise" },
      { id: "encogimientos_hombros", name: "Encogimientos de hombros", group: "Hombros", equipment: "Mancuernas", description: "Eleva los hombros verticalmente hacia las orejas manteniendo los brazos estirados.", animationType: "shoulder_press" },

      // Bíceps
      { id: "curl_bicep_mancuernas", name: "Curl de bícep con mancuernas", group: "Bíceps", equipment: "Mancuernas", description: "Flexiona el brazo girando la muñeca (supinación) al subir la mancuerna.", animationType: "curl" },
      { id: "curl_bicep_barra", name: "Curl de bícep con barra", group: "Bíceps", equipment: "Barra", description: "Sujetá la barra con agarre supino y realizá una flexión controlada apretando los bíceps.", animationType: "curl" },
      { id: "bicep_martillo_mancuernas", name: "Bícep martillo con mancuernas", group: "Bíceps", equipment: "Mancuernas", description: "Flexión con las palmas enfrentadas (agarre neutro), ideal para braquial y antebrazo.", animationType: "curl" },
      { id: "martillo_barra", name: "Martillo con barra", group: "Bíceps", equipment: "Barra romana", description: "Curl con barra especial de agarre neutro manteniendo los codos estables.", animationType: "curl" },
      { id: "curl_predicador", name: "Curl predicador", group: "Bíceps", equipment: "Banco Scott", description: "Apoya los brazos en el banco predicador para aislar por completo los bíceps sin balanceos.", animationType: "curl" },
      { id: "curl_polea_baja", name: "Curl en polea baja", group: "Bíceps", equipment: "Polea", description: "Flexión de brazos usando tensión constante del cable.", animationType: "curl" },

      // Tríceps
      { id: "extension_triceps_polea", name: "Extensión de tríceps (en polea)", group: "Tríceps", equipment: "Polea", description: "Empuja la barra o soga hacia abajo extendiendo completamente los codos al final del recorrido.", animationType: "tricep_ext" },
      { id: "extension_cabeza", name: "Extensión por encima de la cabeza", group: "Tríceps", equipment: "Mancuerna/Polea", description: "Sostén el peso detrás de la nuca con codos arriba y extiéndelo verticalmente.", animationType: "tricep_ext" },
      { id: "rompe_craneos", name: "Rompecráneos / Press francés", group: "Tríceps", equipment: "Barra EZ", description: "Acostado en banco, flexiona los codos bajando la barra hacia la frente y extiéndela verticalmente.", animationType: "tricep_ext" },
      { id: "fondos_tricep", name: "Fondos para trícep", group: "Tríceps", equipment: "Paralelas", description: "Baja tu cuerpo verticalmente sosteniéndote de las barras paralelas con codos cerrados.", animationType: "chest_press_db" },
      { id: "press_cerrado_barra", name: "Press cerrado con barra", group: "Tríceps", equipment: "Barra", description: "Press plano con agarre estrecho (ancho de hombros) para desplazar el trabajo al tríceps.", animationType: "chest_press_db" },
      { id: "patada_tricep", name: "Patada de trícep", group: "Tríceps", equipment: "Mancuernas", description: "Inclinado hacia adelante con el brazo paralelo al suelo, extiende el codo hacia atrás.", animationType: "tricep_ext" },

      // Piernas
      { id: "sentadillas", name: "Sentadillas", group: "Piernas", equipment: "Barra", description: "Con la barra en los trapecios, desciende flexionando rodillas e inclinando la cadera hacia atrás.", animationType: "squat" },
      { id: "prensa_piernas", name: "Prensa de piernas", group: "Piernas", equipment: "Prensa 45°", description: "Empuja la plataforma con las plantas de tus pies cuidando no bloquear rodillas en la extensión.", animationType: "squat" },
      { id: "hack_squat", name: "Hack squat (máquina)", group: "Piernas", equipment: "Máquina", description: "Sentadillas guiadas en plano inclinado con apoyo completo en la espalda.", animationType: "squat" },
      { id: "gemelos_de_pie", name: "Gemelos de pie", group: "Piernas", equipment: "Máquina/Barra", description: "Eleva los talones con carga sobre los hombros enfocando en el gastrocnemio.", animationType: "squat" },
      { id: "gemelos_sentado", name: "Gemelos sentado", group: "Piernas", equipment: "Máquina", description: "Elevación de talones sentado para dar mayor enfoque al sóleo.", animationType: "squat" },
      { id: "extension_cuadriceps", name: "Extensión de cuádriceps (máquina)", group: "Piernas", equipment: "Máquina", description: "Sentado, extiende las piernas hacia arriba para aislar y concentrar los cuádriceps.", animationType: "squat" },
      { id: "curl_femoral_acostado", name: "Curl femoral acostado", group: "Piernas", equipment: "Máquina", description: "Acostado boca abajo, flexiona las rodillas llevando el rodillo a los glúteos.", animationType: "squat" },
      { id: "curl_femoral_sentado", name: "Curl femoral sentado", group: "Piernas", equipment: "Máquina", description: "Sentado, flexiona las piernas jalando el rodillo hacia abajo para aislar isquiotibiales.", animationType: "squat" },
      { id: "peso_muerto_rumano", name: "Peso muerto rumano", group: "Piernas", equipment: "Barra/Mancuernas", description: "Desciende la barra manteniendo las piernas casi estiradas e inclinando la cadera hacia atrás.", animationType: "deadlift" },
      { id: "aductores", name: "Aductores (máquina)", group: "Piernas", equipment: "Máquina", description: "Cierra las piernas contra la resistencia para trabajar la cara interna de los muslos.", animationType: "squat" },
      { id: "abductores", name: "Abductores", group: "Piernas", equipment: "Máquina/Panda", description: "Abre las piernas contra la resistencia para enfocar el glúteo medio.", animationType: "squat" },
      { id: "zancadas_lunges", name: "Zancadas / Lunges", group: "Piernas", equipment: "Mancuernas", description: "Da un paso adelante descendiendo la cadera hasta flexionar ambas piernas a 90 grados.", animationType: "squat" },
      { id: "hip_thrust", name: "Hip thrust", group: "Piernas", equipment: "Barra", description: "Con la espalda alta apoyada en un banco, empuja la pelvis hacia arriba con la barra en la cadera.", animationType: "deadlift" },
      { id: "sentadilla_bulgara", name: "Sentadilla búlgara", group: "Piernas", equipment: "Mancuernas", description: "Sentadilla a una pierna apoyando la punta del pie trasero en un banco elevado.", animationType: "squat" },
      
      // Abdominales
      { id: "abdominales_crunches", name: "Abdominales (crunches)", group: "Abdominales", equipment: "Peso corporal", description: "Acostado boca arriba con rodillas flexionadas, eleva los hombros del suelo contrayendo el abdomen.", animationType: "crunch" },
      { id: "plancha_baja", name: "Plancha baja", group: "Abdominales", equipment: "Peso corporal", description: "Sostén tu cuerpo en línea recta apoyado en antebrazos y puntas de los pies. Mantén el abdomen contraído.", animationType: "plank" },
      { id: "plancha_alta", name: "Plancha alta", group: "Abdominales", equipment: "Peso corporal", description: "Sostén tu cuerpo en posición de flexión de brazos con los codos completamente extendidos.", animationType: "plank" },
      { id: "elevaciones_piernas", name: "Elevaciones de piernas", group: "Abdominales", equipment: "Peso corporal", description: "Acostado boca arriba, eleva las piernas estiradas hasta los 90 grados y desciende de forma controlada.", animationType: "crunch" },
      { id: "giros_rusos", name: "Giros rusos", group: "Abdominales", equipment: "Peso corporal", description: "Sentado con el torso inclinado hacia atrás y pies elevados, rota el torso de lado a lado.", animationType: "crunch" }
    ];

    /***************************************************************************
     * SUPPLEMENT ICONS (SVG Templates)
     **************************************************************************/
    const SUPPLEMENT_ICONS = {
      protein_shake: `<svg viewBox="0 0 100 100"><rect x="36" y="18" width="28" height="18" rx="7" class="supp-path-sec"/><path d="M30,38 Q28,42 28,46 L28,82 Q28,88 34,88 L66,88 Q72,88 72,82 L72,46 Q72,42 70,38 Z" class="supp-path"/><path d="M33,68 Q42,62 50,68 Q58,74 67,68" class="supp-path-sec"/><line x1="34" y1="52" x2="66" y2="52" class="supp-detail-line"/></svg>`,
      crystal: `<svg viewBox="0 0 100 100"><polygon points="50,12 74,28 74,72 50,88 26,72 26,28" class="supp-path"/><polygon points="50,30 64,38 64,62 50,70 36,62 36,38" class="supp-path-sec"/><circle cx="50" cy="50" r="6" class="supp-fill-sec"/></svg>`,
      molecule: `<svg viewBox="0 0 100 100"><circle cx="18" cy="50" r="12" class="supp-path"/><circle cx="50" cy="22" r="12" class="supp-path-sec"/><circle cx="82" cy="50" r="12" class="supp-path"/><circle cx="50" cy="78" r="9" class="supp-path-sec"/><line x1="30" y1="44" x2="38" y2="32" class="supp-path"/><line x1="62" y1="32" x2="70" y2="44" class="supp-path"/><line x1="50" y1="34" x2="50" y2="69" class="supp-path-sec"/></svg>`,
      drop: `<svg viewBox="0 0 100 100"><path d="M50,10 Q72,36 72,60 A22,22 0 0,1 28,60 Q28,36 50,10 Z" class="supp-path"/><path d="M42,38 Q40,48 40,58" class="supp-path-sec"/><circle cx="60" cy="42" r="5" class="supp-fill-sec"/></svg>`,
      lightning: `<svg viewBox="0 0 100 100"><polygon points="58,8 28,54 48,54 42,92 72,46 52,46" class="supp-path-sec"/><line x1="58" y1="8" x2="52" y2="46" class="supp-path"/><line x1="42" y1="54" x2="42" y2="92" class="supp-path"/></svg>`,
      coffee: `<svg viewBox="0 0 100 100"><path d="M20,42 L25,84 Q25,90 32,90 L68,90 Q75,90 75,84 L80,42 Z" class="supp-path"/><path d="M75,55 Q90,55 90,65 Q90,75 75,75" class="supp-path-sec"/><line x1="17" y1="42" x2="83" y2="42" class="supp-path"/><path d="M36,30 Q34,22 36,14" class="supp-path-sec"/><path d="M50,28 Q48,20 50,12" class="supp-path-sec"/><path d="M64,30 Q62,22 64,14" class="supp-path-sec"/></svg>`,
      sun: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="16" class="supp-path-sec"/><line x1="50" y1="10" x2="50" y2="24" class="supp-path-sec"/><line x1="50" y1="76" x2="50" y2="90" class="supp-path-sec"/><line x1="10" y1="50" x2="24" y2="50" class="supp-path-sec"/><line x1="76" y1="50" x2="90" y2="50" class="supp-path-sec"/><line x1="22" y1="22" x2="31" y2="31" class="supp-path-sec"/><line x1="69" y1="69" x2="78" y2="78" class="supp-path-sec"/><line x1="78" y1="22" x2="69" y2="31" class="supp-path-sec"/><line x1="22" y1="78" x2="31" y2="69" class="supp-path-sec"/></svg>`,
      capsule: `<svg viewBox="0 0 100 100"><path d="M28,42 A22,22 0 0,0 28,58 L50,58 L50,42 Z" class="supp-fill"/><path d="M72,42 A22,22 0 0,1 72,58 L50,58 L50,42 Z" class="supp-fill-sec"/><rect x="28" y="42" width="44" height="16" rx="8" class="supp-outline"/><circle cx="32" cy="74" r="8" class="supp-path"/><circle cx="50" cy="74" r="8" class="supp-path-sec"/><circle cx="68" cy="74" r="8" class="supp-path"/></svg>`,
      moon: `<svg viewBox="0 0 100 100"><path d="M62,18 A36,36 0 1,0 62,82 A26,26 0 1,1 62,18 Z" class="supp-path-sec"/><circle cx="72" cy="32" r="4" class="supp-fill-sec"/><circle cx="80" cy="52" r="3" class="supp-fill-sec"/><circle cx="70" cy="70" r="3.5" class="supp-fill-sec"/></svg>`,
      leaf: `<svg viewBox="0 0 100 100"><path d="M50,88 Q20,68 20,44 Q20,16 50,10 Q80,16 80,44 Q80,68 50,88 Z" class="supp-path-sec"/><line x1="50" y1="88" x2="50" y2="18" class="supp-path"/><line x1="50" y1="42" x2="30" y2="32" class="supp-path"/><line x1="50" y1="56" x2="28" y2="48" class="supp-path"/><line x1="50" y1="42" x2="70" y2="32" class="supp-path"/><line x1="50" y1="56" x2="72" y2="48" class="supp-path"/></svg>`,
      spiral: `<svg viewBox="0 0 100 100"><path d="M25,88 Q40,68 50,50 Q60,32 75,12" class="supp-path"/><path d="M32,92 Q47,70 50,50 Q53,30 68,8" class="supp-path-sec"/><circle cx="50" cy="50" r="6" class="supp-fill"/><circle cx="34" cy="72" r="5" class="supp-fill-sec"/><circle cx="66" cy="28" r="5" class="supp-fill-sec"/></svg>`
    };

    /***************************************************************************
     * SUPPLEMENTS DATABASE
     **************************************************************************/
    const SUPPLEMENTS = [
      // Proteinas
      { id: "whey", name: "Whey Protein", category: "Proteinas", iconType: "protein_shake",
        description: "Proteina de suero de leche de rapida absorcion. La mas utilizada para la recuperacion y el crecimiento muscular post-entrenamiento.",
        dose: "25-30g por porcion (1 scoop)",
        timing: "Post-entreno, o en cualquier momento del dia como complemento proteico",
        warning: "Contiene lactosa. Puede causar molestias digestivas en personas intolerantes." },
      { id: "caseina", name: "Caseina", category: "Proteinas", iconType: "protein_shake",
        description: "Proteina de digestion lenta que libera aminoacidos de forma gradual. Ideal para evitar el catabolismo nocturno.",
        dose: "30-40g por porcion",
        timing: "Antes de dormir para maximizar la sintesis proteica durante el sueno",
        warning: null },
      { id: "proteina_vegana", name: "Proteina Vegana", category: "Proteinas", iconType: "protein_shake",
        description: "Combinacion de proteinas de guisante, arroz y/o canamo. Perfil completo de aminoacidos, libre de lactosa y gluten.",
        dose: "25-30g por porcion",
        timing: "Post-entreno o como complemento en cualquier momento del dia",
        warning: null },
      // Creatinas
      { id: "creatina_mono", name: "Creatina Monohidrato", category: "Creatinas", iconType: "crystal",
        description: "El suplemento mas estudiado en el deporte. Aumenta la fuerza, la potencia y la masa muscular mediante la resintesis de ATP.",
        dose: "3-5g por dia (sin fase de carga) o 20g/dia durante 5 dias (con fase de carga)",
        timing: "Post-entreno con jugo o bebida azucarada para mejorar la absorcion",
        warning: "Hidratarse bien durante el uso. Puede causar leve retencion de agua inicial." },
      { id: "creatina_hcl", name: "Creatina HCL", category: "Creatinas", iconType: "crystal",
        description: "Clorhidrato de creatina, mas soluble que la monohidrato. Requiere menor dosis y genera menos retencion hidrica.",
        dose: "1-2g por dia",
        timing: "Pre o post-entrenamiento",
        warning: null },
      // Aminoacidos
      { id: "bcaa", name: "BCAA", category: "Aminoacidos", iconType: "molecule",
        description: "Aminoacidos ramificados (Leucina, Isoleucina, Valina). Reducen la fatiga muscular y protegen contra la degradacion proteica durante el entreno.",
        dose: "5-10g por toma (relacion 2:1:1 o 4:1:1 de Leucina)",
        timing: "Durante el entrenamiento o en ayunas",
        warning: null },
      { id: "eaa", name: "EAA (Aminoacidos Esenciales)", category: "Aminoacidos", iconType: "molecule",
        description: "Los 9 aminoacidos esenciales que el cuerpo no sintetiza por si solo. Perfil mas completo que los BCAA para la sintesis proteica total.",
        dose: "10-15g por toma",
        timing: "Intra o post-entrenamiento",
        warning: null },
      { id: "glutamina", name: "L-Glutamina", category: "Aminoacidos", iconType: "molecule",
        description: "Aminoacido mas abundante en el tejido muscular. Favorece la recuperacion, refuerza el sistema inmune y cuida la salud intestinal.",
        dose: "5-10g por dia",
        timing: "Post-entreno o antes de dormir",
        warning: null },
      { id: "arginina", name: "L-Arginina", category: "Aminoacidos", iconType: "molecule",
        description: "Precursor del oxido nitrico (NO). Mejora la vasodilatacion y el flujo sanguineo muscular durante el entrenamiento (pump).",
        dose: "3-6g por toma",
        timing: "30-45 minutos antes del entrenamiento, en ayunas",
        warning: "No recomendado en personas con herpes activo o presion arterial baja. Consultar medico." },
      // Quemadores
      { id: "carnitina", name: "L-Carnitina", category: "Quemadores", iconType: "drop",
        description: "Transporta acidos grasos a las mitocondrias para oxidarlos como energia. Apoya la quema de grasa y mejora la recuperacion muscular.",
        dose: "1-3g por toma",
        timing: "30-60 minutos antes del entrenamiento, preferentemente en ayunas",
        warning: "Mayor efectividad en personas con baja ingesta natural de carnitina (veganos/vegetarianos)." },
      { id: "cafeina", name: "Cafeina", category: "Quemadores", iconType: "coffee",
        description: "Estimulante del sistema nervioso central. Mejora la energia, la concentracion, la fuerza y la resistencia durante el entrenamiento.",
        dose: "100-400mg por dosis (ajustar segun tolerancia individual)",
        timing: "30-60 minutos antes del entrenamiento",
        warning: "Evitar despues de las 14hs para no alterar el sueno. No superar 400mg/dia." },
      { id: "preworkout", name: "Pre-Workout", category: "Quemadores", iconType: "lightning",
        description: "Formula combinada con cafeina, beta-alanina, citrulina y otros ingredientes para maximizar energia, fuerza y pump muscular.",
        dose: "1 porcion (segun el producto) disuelta en 250-300ml de agua fria",
        timing: "20-30 minutos antes del entrenamiento",
        warning: "Revisar la composicion. Evitar si sos sensible a estimulantes. No combinar con cafeina extra." },
      // Vitaminas y Minerales
      { id: "omega3", name: "Omega 3", category: "Vitaminas", iconType: "drop",
        description: "Acidos grasos esenciales EPA y DHA. Reduce la inflamacion sistemica, mejora la salud cardiovascular y la recuperacion muscular.",
        dose: "2-3g de EPA+DHA por dia (generalmente 2-3 capsulas segun concentracion)",
        timing: "Con las comidas para mejor absorcion y evitar el sabor a pescado",
        warning: null },
      { id: "vitamina_d3", name: "Vitamina D3", category: "Vitaminas", iconType: "sun",
        description: "Regula la absorcion de calcio, la funcion inmune, hormonal y la sintesis proteica. Su deficit es muy comun en Argentina.",
        dose: "1.000-5.000 UI por dia (segun niveles sericos en analisis de sangre)",
        timing: "Con la comida mas grande del dia, preferentemente acompanada de grasas saludables",
        warning: "Consultar al medico para controlar los niveles en sangre antes y durante la suplementacion." },
      { id: "multivitaminico", name: "Multivitaminico", category: "Vitaminas", iconType: "capsule",
        description: "Combinacion de vitaminas y minerales esenciales. Cubre posibles deficiencias nutricionales y apoya el rendimiento general.",
        dose: "1-2 capsulas o comprimidos segun el producto",
        timing: "Con el desayuno o almuerzo (con comida para evitar nauseas)",
        warning: null },
      { id: "zma", name: "ZMA (Zinc + Magnesio)", category: "Vitaminas", iconType: "capsule",
        description: "Combinacion de Zinc, Magnesio y Vitamina B6. Mejora la calidad del sueno, la recuperacion muscular y los niveles de testosterona.",
        dose: "Segun el producto (generalmente 3 capsulas)",
        timing: "30-60 minutos antes de dormir, con el estomago vacio",
        warning: "No tomar junto con calcio ya que compiten por la absorcion intestinal." },
      { id: "vitamina_c", name: "Vitamina C", category: "Vitaminas", iconType: "sun",
        description: "Potente antioxidante. Apoya el sistema inmune, la sintesis de colageno y la absorcion de hierro no hemo.",
        dose: "500-1.000mg por dia",
        timing: "Con las comidas para mejorar la tolerancia gastrica",
        warning: "Dosis superiores a 2g/dia pueden causar molestias digestivas o diarrea." },
      // Otros
      { id: "colageno", name: "Colageno", category: "Otros", iconType: "spiral",
        description: "Proteina estructural del tejido conectivo. Apoya la salud de articulaciones, tendones, ligamentos, huesos y piel.",
        dose: "10-15g por dia de colageno hidrolizado",
        timing: "En ayunas o antes de entrenar. Combinar con vitamina C para potenciar su sintesis.",
        warning: null },
      { id: "melatonina", name: "Melatonina", category: "Otros", iconType: "moon",
        description: "Hormona natural del sueno. Regula el ciclo circadiano, mejora la calidad y profundidad del sueno y optimiza la recuperacion nocturna.",
        dose: "0.5-3mg por dosis (comenzar con la dosis mas baja)",
        timing: "30-60 minutos antes de dormir, en un ambiente oscuro y tranquilo",
        warning: "Consultar al medico si se toma otra medicacion, o en caso de embarazo o lactancia." },
      { id: "ashwagandha", name: "Ashwagandha", category: "Otros", iconType: "leaf",
        description: "Adaptogeno que reduce el cortisol y el estres cronico. Mejora la fuerza, resistencia, libido y la calidad del sueno.",
        dose: "300-600mg de extracto estandarizado por dia (KSM-66 o Sensoril)",
        timing: "Con las comidas, puede tomarse en cualquier momento del dia",
        warning: "Consultar al medico si se tiene enfermedad autoinmune o se toma medicacion." }
    ];


    // Local Storage Helpers
    const storage = {
      getUser: () => {
        try {
          const userStr = localStorage.getItem('gymtracker_user');
          return userStr ? JSON.parse(userStr) : null;
        } catch (e) {
          return null;
        }
      },
      setUser: (userData) => {
        try {
          localStorage.setItem('gymtracker_user', JSON.stringify(userData));
          localStorage.setItem('gymtracker_last_modified', new Date().toISOString());
        } catch (e) {}
      },
      getSessions: () => {
        try {
          const sessionsStr = localStorage.getItem('gymtracker_sessions');
          return sessionsStr ? JSON.parse(sessionsStr) : {};
        } catch (e) {
          return {};
        }
      },
      setSessions: (sessionsData) => {
        try {
          localStorage.setItem('gymtracker_sessions', JSON.stringify(sessionsData));
          localStorage.setItem('gymtracker_last_modified', new Date().toISOString());
        } catch (e) {}
      },
      getBodyLog: () => {
        try {
          const logStr = localStorage.getItem('gymtracker_bodylog');
          return logStr ? JSON.parse(logStr) : [];
        } catch (e) {
          return [];
        }
      },
      setBodyLog: (bodyLogData) => {
        try {
          localStorage.setItem('gymtracker_bodylog', JSON.stringify(bodyLogData));
          localStorage.setItem('gymtracker_last_modified', new Date().toISOString());
        } catch (e) {}
      },
      // Supabase config hardcodeada — no requiere configuración del usuario
      getSupabaseConfig: () => {
        return {
          url: 'https://ltzbkkztgfsdjtiqteaz.supabase.co',
          key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0emJra3p0Z2ZzZGp0aXF0ZWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjEzMzQsImV4cCI6MjA5Nzg5NzMzNH0.I5FeFHoveJICUSre3gMJZrHZJYy0xJxkAclyNP7SW1w'
        };
      },
      setSupabaseConfig: (config) => { /* no-op: config is hardcoded */ },
      getSession: () => {
        try {
          const sessionStr = localStorage.getItem('gymtracker_session');
          return sessionStr ? JSON.parse(sessionStr) : null;
        } catch (e) {
          return null;
        }
      },
      setSession: (session) => {
        try {
          if (session) {
            localStorage.setItem('gymtracker_session', JSON.stringify(session));
          } else {
            localStorage.removeItem('gymtracker_session');
          }
        } catch (e) {}
      },
      getSupplementLog: function() {
        try {
          var logStr = localStorage.getItem('gymtracker_supplog');
          return logStr ? JSON.parse(logStr) : {};
        } catch (e) { return {}; }
      },
      setSupplementLog: function(suppLogData) {
        try {
          localStorage.setItem('gymtracker_supplog', JSON.stringify(suppLogData));
          localStorage.setItem('gymtracker_last_modified', new Date().toISOString());
        } catch (e) {}
      },
      getRoutines: () => {
        try {
          const routinesStr = localStorage.getItem('gymtracker_routines');
          return routinesStr ? JSON.parse(routinesStr) : [];
        } catch (e) {
          return [];
        }
      },
      setRoutines: (routinesData) => {
        try {
          localStorage.setItem('gymtracker_routines', JSON.stringify(routinesData));
          localStorage.setItem('gymtracker_last_modified', new Date().toISOString());
        } catch (e) {}
      }
    };

    /***************************************************************************
     * 2. STATE & GLOBALS
     **************************************************************************/
    let currentUser = null;
    let sessions = {};
    let bodyLog = [];
    let supplementLog = {}; // { "YYYY-MM-DD": ["suppId1", ...] }
    let routines = [];
    let currentSelectedDate = new Date();
    let calendarMonthYear = new Date();
    let currentActiveView = "perfil";
    let isEditingExerciseIndex = null;

    let authMode = 'login'; // 'login' or 'register'
    let activeSyncStatus = 'offline'; // 'offline', 'synced', 'pending'

    // Inactivity warning
    let inactivityTimer = null;
    let countdownInterval = null;

    // Stopwatch and rest timer state
    let stopwatchInterval = null;
    let stopwatchTime = 0; // centiseconds
    let stopwatchRunning = false;
    let stopwatchLaps = [];

    let timerInterval = null;
    let timerTime = 90; // default 1:30 in seconds
    let timerRunning = false;
    let timerOriginalTime = 90;

    /***************************************************************************
     * 3. INITIALIZATION & ROUTING
     **************************************************************************/

    window.addEventListener('DOMContentLoaded', async () => {
      // Initialize UI theme always first
      initTheme();

      // Register all event listeners immediately so UI is always interactive
      registerGlobalEvents();
      initInactivityTracker();
      initStopwatchAndTimer();
      window.addEventListener('resize', handleChartsResize);

      // Check for saved session
      try {
        const session = storage.getSession();

        if (session) {
          // Verify & possibly refresh session token
          const validSession = await verifyOrRefreshSession(session);
          if (validSession) {
            // Load local data
            currentUser = storage.getUser();
            sessions = storage.getSessions();
            bodyLog = storage.getBodyLog();
            supplementLog = storage.getSupplementLog();
            routines = storage.getRoutines();

            if (!currentUser || !currentUser.name) {
              showWelcomeScreen();
            } else {
              showAppScreen();
              switchView('perfil');
              syncWithCloud(); // Sync silently on start
              startAutoSync(); // Start periodic background sync
            }
          } else {
            showAuthScreen();
          }
        } else {
          showAuthScreen();
        }
      } catch (err) {
        console.error('Error en inicialización:', err);
        showAuthScreen(); // Always fall back to login screen on any error
      }
    });

    function showAuthScreen() {
      document.getElementById('authScreen').style.display = 'block';
      document.getElementById('welcomeScreen').style.display = 'none';
      document.getElementById('appHeaderNav').style.display = 'none';
      document.getElementById('view-perfil').style.display = 'none';
      document.getElementById('view-calendario').style.display = 'none';
      document.getElementById('view-progreso').style.display = 'none';
      document.getElementById('view-ejercicios').style.display = 'none';
      document.getElementById('view-suplementos').style.display = 'none';
      document.getElementById('view-rutinas').style.display = 'none';
    }

    function showWelcomeScreen() {
      document.getElementById('authScreen').style.display = 'none';
      document.getElementById('welcomeScreen').style.display = 'block';
      document.getElementById('appHeaderNav').style.display = 'none';
      document.getElementById('view-perfil').style.display = 'none';
    }

    function showAppScreen() {
      document.getElementById('authScreen').style.display = 'none';
      document.getElementById('welcomeScreen').style.display = 'none';
      document.getElementById('appHeaderNav').style.display = 'block';
      // Clear inline display overrides so styles.css .active-view class can handle showing/hiding
      document.getElementById('view-perfil').style.display = '';
      document.getElementById('view-calendario').style.display = '';
      document.getElementById('view-progreso').style.display = '';
      document.getElementById('view-ejercicios').style.display = '';
      document.getElementById('view-suplementos').style.display = '';
      document.getElementById('view-rutinas').style.display = '';
    }

    function switchView(viewName) {
      currentActiveView = viewName;
      
      // Close open drawers and modals upon navigation
      closeDayDetailPanel();
      const modalIds = [
        'addExerciseModalStep1', 
        'addExerciseModalStep2', 
        'addSuppModal', 
        'measuresModal',
        'routineModal',
        'routineExerciseSelectorModal',
        'loadRoutineModal'
      ];
      modalIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('open');
      });
      
      // Update Navigation styling
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === viewName) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // Show/Hide Screens
      document.querySelectorAll('.view-screen').forEach(screen => {
        if (screen.id === `view-${viewName}`) {
          screen.classList.add('active-view');
        } else {
          screen.classList.remove('active-view');
        }
      });

      // Trigger Render & Charts depending on view
      if (viewName === "perfil") {
        renderProfile();
      } else if (viewName === "calendario") {
        renderCalendar();
        renderDayDetailPanel();
      } else if (viewName === "progreso") {
        renderProgress();
      } else if (viewName === "ejercicios") {
        renderExerciseLibrary();
      } else if (viewName === "suplementos") {
        renderSupplementLibrary();
      } else if (viewName === "rutinas") {
        renderRoutines();
      }
    }

    /***************************************************************************
     * 4. SUPABASE API & AUTHENTICATION INTEGRATION
     **************************************************************************/

    async function verifyOrRefreshSession(session, forceRefresh = false) {
      const config = storage.getSupabaseConfig();
      if (!config || !session) return false;

      const expiresAt = session.expires_at || 0; // Epoch timestamp in seconds
      const nowEpoch = Math.floor(Date.now() / 1000);

      // If token has expired or expires in less than 5 minutes, or we want to force refresh
      if (forceRefresh || (expiresAt - nowEpoch < 300)) {
        if (session.refresh_token) {
          try {
            const refreshed = await apiRefreshToken(config, session.refresh_token);
            if (refreshed) {
              const newSession = parseSessionData(refreshed);
              storage.setSession(newSession);
              return true;
            }
          } catch (e) {
            console.error("No se pudo refrescar sesión", e);
            if (e instanceof TypeError || (e.message && (e.message.toLowerCase().includes('fetch') || e.message.toLowerCase().includes('network') || e.message.toLowerCase().includes('failed to fetch')))) {
              console.log("Error de red detectado al refrescar. Continuando en modo offline.");
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }

    function parseSessionData(data) {
      const expiresAt = Math.floor(Date.now() / 1000) + (data.expires_in || 3600);
      return {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: expiresAt,
        user: {
          id: data.user.id,
          email: data.user.email
        }
      };
    }

    async function apiRefreshToken(config, refreshToken) {
      const response = await fetch(`${config.url}/auth/v1/token?grant_type=refresh_token`, {
        method: 'POST',
        headers: {
          'apikey': config.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh_token: refreshToken })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error_description || "Error de token");
      return data;
    }

    async function apiSignUp(config, email, password) {
      const response = await fetch(`${config.url}/auth/v1/signup`, {
        method: 'POST',
        headers: {
          'apikey': config.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || data.message || "Error al registrarse");
      return data;
    }

    async function apiLogin(config, email, password) {
      const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
          'apikey': config.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error_description || data.message || "Email o contraseña inválida");
      return data;
    }

    /***************************************************************************
     * 5. CLOUD SYNCHRONIZATION FLOW (REST API)
     **************************************************************************/

    async function syncWithCloud() {
      const config = storage.getSupabaseConfig();
      const session = storage.getSession();
      if (!config || !session) {
        updateSyncStatus('offline');
        return;
      }

      updateSyncStatus('pending');

      try {
        const userId = session.user.id;
        const response = await fetch(`${config.url}/rest/v1/gymtracker_sync?user_id=eq.${userId}&select=*`, {
          method: 'GET',
          headers: {
            'apikey': config.key,
            'Authorization': `Bearer ${session.access_token}`
          }
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            // Access token expired, try to refresh
            const tokenRefreshed = await verifyOrRefreshSession(session, true);
            if (tokenRefreshed) {
              return syncWithCloud(); // retry once
            }
          }
          throw new Error("Error en conexión con Supabase");
        }

        const rows = await response.json();
        const localModTime = localStorage.getItem('gymtracker_last_modified');

        if (rows.length === 0) {
          // Cloud empty, upload local data
          await uploadLocalData(config, session, userId);
        } else {
          const remoteData = rows[0];
          const remoteModTime = remoteData.updated_at;

          if (!localModTime) {
            // First time on device, pull remote
            applyRemoteData(remoteData);
          } else {
            const localDate = new Date(localModTime);
            const remoteDate = new Date(remoteModTime);

            // Time difference threshold (ignore tiny deviations)
            if (Math.abs(localDate - remoteDate) > 2000) {
              if (remoteDate > localDate) {
                // Remote is newer, download
                applyRemoteData(remoteData);
                showToast("Datos descargados de la nube");
              } else {
                // Local is newer, upload
                await uploadLocalData(config, session, userId);
              }
            } else {
              // Synced
              updateSyncStatus('synced');
            }
          }
        }
      } catch (e) {
        console.error("Fallo de sincronización", e);
        updateSyncStatus('offline');
      }
    }

    async function uploadLocalData(config, session, userId) {
      const nowStr = new Date().toISOString();
      const payload = {
        user_id: userId,
        user_data: {
          profile: currentUser || {},
          supplementLog: supplementLog || {},
          routines: routines || []
        },
        sessions_data: sessions || {},
        bodylog_data: bodyLog || [],
        updated_at: nowStr
      };

      const response = await fetch(`${config.url}/rest/v1/gymtracker_sync?on_conflict=user_id`, {
        method: 'POST',
        headers: {
          'apikey': config.key,
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("No se pudieron subir los datos");
      
      localStorage.setItem('gymtracker_last_modified', nowStr);
      localStorage.setItem('gymtracker_last_sync', nowStr);
      updateSyncStatus('synced');
    }

    function applyRemoteData(remoteData) {
      const userData = remoteData.user_data || {};
      if (userData.profile !== undefined) {
        currentUser = userData.profile;
        supplementLog = userData.supplementLog || {};
        routines = userData.routines || [];
      } else {
        currentUser = userData;
        supplementLog = {};
        routines = [];
      }

      sessions = remoteData.sessions_data || {};
      bodyLog = remoteData.bodylog_data || [];

      storage.setUser(currentUser);
      // Directly bypass setters modification flag update during sync write
      localStorage.setItem('gymtracker_sessions', JSON.stringify(sessions));
      localStorage.setItem('gymtracker_bodylog', JSON.stringify(bodyLog));
      localStorage.setItem('gymtracker_supplog', JSON.stringify(supplementLog));
      localStorage.setItem('gymtracker_routines', JSON.stringify(routines));

      localStorage.setItem('gymtracker_last_modified', remoteData.updated_at);
      localStorage.setItem('gymtracker_last_sync', new Date().toISOString());
      
      updateSyncStatus('synced');
      
      if (currentActiveView === 'perfil') renderProfile();
      if (currentActiveView === 'calendario') {
        renderCalendar();
        renderDayDetailPanel();
      }
      if (currentActiveView === 'progreso') renderProgress();
      if (currentActiveView === 'ejercicios') renderExerciseLibrary();
      if (currentActiveView === 'suplementos') renderSupplementLibrary();
    }

    function updateSyncStatus(status) {
      activeSyncStatus = status;
      const badge = document.getElementById('syncBadge');
      const timeText = document.getElementById('syncTimeText');
      if (!badge) return;

      const lastSync = localStorage.getItem('gymtracker_last_sync');
      if (lastSync) {
        const d = new Date(lastSync);
        timeText.textContent = `Última sinc: ${d.toLocaleDateString('es-AR')} ${d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`;
      } else {
        timeText.textContent = "Última sinc: Nunca";
      }

      badge.className = 'sync-status-badge';
      if (status === 'synced') {
        badge.classList.add('synced');
        badge.textContent = 'Nube al día';
      } else if (status === 'pending') {
        badge.classList.add('pending');
        badge.textContent = 'Sincronizando...';
      } else {
        badge.classList.add('offline');
        badge.textContent = 'Desconectado';
      }
    }

    let syncIntervalId = null;
    function startAutoSync() {
      if (syncIntervalId) clearInterval(syncIntervalId);
      syncIntervalId = setInterval(syncWithCloud, 30000);
    }

    /***************************************************************************
     * 6. COMMON EVENT REGISTRATION
     **************************************************************************/
    function registerGlobalEvents() {
      // Nav links switching
      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
          const view = e.currentTarget.getAttribute('data-view');
          switchView(view);
        });
      });

      // Auth Mode Switcher Tab
      document.getElementById('tabLoginBtn').addEventListener('click', (e) => {
        authMode = 'login';
        document.getElementById('tabLoginBtn').classList.add('active-tab');
        document.getElementById('tabRegisterBtn').classList.remove('active-tab');
        document.getElementById('authSubmitBtn').textContent = "Entrar";
        document.getElementById('authError').style.display = 'none';
        if (e.isTrusted) {
          document.getElementById('authInfo').style.display = 'none';
        }
      });

      document.getElementById('tabRegisterBtn').addEventListener('click', () => {
        authMode = 'register';
        document.getElementById('tabRegisterBtn').classList.add('active-tab');
        document.getElementById('tabLoginBtn').classList.remove('active-tab');
        document.getElementById('authSubmitBtn').textContent = "Crear Cuenta";
        document.getElementById('authError').style.display = 'none';
        document.getElementById('authInfo').style.display = 'none';
      });

      // Submit Auth Form (Login or Signup)
      document.getElementById('authForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const config = storage.getSupabaseConfig(); // Siempre disponible (hardcodeado)
        const errorBox = document.getElementById('authError');
        const infoBox = document.getElementById('authInfo');
        errorBox.style.display = 'none';

        const email = document.getElementById('authEmail').value.trim();
        const password = document.getElementById('authPassword').value;
        const submitBtn = document.getElementById('authSubmitBtn');

        submitBtn.disabled = true;
        submitBtn.textContent = "Cargando...";

        try {
          if (authMode === 'login') {
            const data = await apiLogin(config, email, password);
            const session = parseSessionData(data);
            storage.setSession(session);
            showToast("Sesión iniciada");
          } else {
            await apiSignUp(config, email, password);
            infoBox.innerHTML = `<strong>¡Cuenta creada con éxito!</strong><br>Por favor, revisá tu casilla de correo (y la carpeta de Spam) y haz clic en el enlace de confirmación enviado por Supabase para activar tu cuenta antes de iniciar sesión.`;
            infoBox.style.display = 'block';
            showToast("Verificá tu correo electrónico");
            // Switch tabs
            document.getElementById('tabLoginBtn').click();
            return;
          }

          // Verify user local details after login
          currentUser = storage.getUser();
          sessions = storage.getSessions();
          bodyLog = storage.getBodyLog();

          // Pull remote data immediately to check if there is an existing profile
          await syncWithCloud();

          // Refresh state variables
          currentUser = storage.getUser();
          sessions = storage.getSessions();
          bodyLog = storage.getBodyLog();

          if (!currentUser) {
            showWelcomeScreen();
          } else {
            showAppScreen();
            switchView("perfil");
          }
        } catch (err) {
          let userMsg = err.message || "Error de credenciales";
          const lowerMsg = userMsg.toLowerCase();
          
          if (lowerMsg.includes("email not confirmed") || lowerMsg.includes("confirmar") || lowerMsg.includes("confirmation")) {
            userMsg = "Debés confirmar tu correo electrónico antes de ingresar.";
            infoBox.innerHTML = `<strong>Confirmación pendiente:</strong><br>Hacé clic en el enlace de activación que te envió Supabase a tu email. Si no lo ves, buscá en la carpeta de Spam.`;
            infoBox.style.display = 'block';
          } else if (lowerMsg.includes("invalid login credentials") || lowerMsg.includes("invalid_grant")) {
            userMsg = "Email o contraseña incorrecta.";
          } else if (lowerMsg.includes("signup is disabled")) {
            userMsg = "El registro de nuevos usuarios está deshabilitado.";
          } else if (lowerMsg.includes("already registered") || lowerMsg.includes("already exists")) {
            userMsg = "Esta dirección de correo ya está registrada.";
          }
          
          errorBox.textContent = userMsg;
          errorBox.style.display = 'block';
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = authMode === 'login' ? "Entrar" : "Crear Cuenta";
        }
      });

      // Welcome Form submit (local profile creation after first login)
      document.getElementById('welcomeForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const weight = parseFloat(document.getElementById('regWeight').value);
        const height = parseFloat(document.getElementById('regHeight').value);

        if (name && weight && height) {
          currentUser = {
            name,
            weight,
            height,
            createdAt: new Date().toISOString()
          };
          storage.setUser(currentUser);

          const todayStr = getFormattedDateKey(new Date());
          bodyLog = [{ date: todayStr, weight, height }];
          storage.setBodyLog(bodyLog);

          showAppScreen();
          switchView("perfil");
          showToast("¡Perfil creado!");

          // Upload first state to cloud
          syncWithCloud();
          startAutoSync();
        }
      });

      // Profile: Update measures click
      document.getElementById('updateMeasuresBtn').addEventListener('click', () => {
        document.getElementById('measWeight').value = currentUser.weight;
        document.getElementById('measHeight').value = currentUser.height;
        document.getElementById('measuresModal').classList.add('open');
      });

      // Close Measures Modal
      document.getElementById('closeMeasuresModalBtn').addEventListener('click', () => {
        document.getElementById('measuresModal').classList.remove('open');
      });

      // Save Measures submit
      document.getElementById('measuresForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('measWeight').value);
        const height = parseFloat(document.getElementById('measHeight').value);

        if (weight && height) {
          currentUser.weight = weight;
          currentUser.height = height;
          storage.setUser(currentUser);

          const todayStr = getFormattedDateKey(new Date());
          
          const existingIndex = bodyLog.findIndex(l => l.date === todayStr);
          if (existingIndex !== -1) {
            bodyLog[existingIndex] = { date: todayStr, weight, height };
          } else {
            bodyLog.push({ date: todayStr, weight, height });
          }
          
          bodyLog.sort((a,b) => new Date(a.date) - new Date(b.date));
          storage.setBodyLog(bodyLog);

          document.getElementById('measuresModal').classList.remove('open');
          renderProfile();
          showToast("Medidas actualizadas");

          // Sync changes
          syncWithCloud();
        }
      });

      // Cloud Sync Button
      document.getElementById('syncNowBtn').addEventListener('click', () => {
        syncWithCloud();
      });

      // Logout Button
      document.getElementById('logoutBtn').addEventListener('click', () => {
        showCustomConfirm(
          "Cerrar Sesión",
          "¿Estás seguro de que querés cerrar sesión? Se eliminarán los datos locales de este dispositivo (asegurate de haber sincronizado).",
          () => {
            if (syncIntervalId) {
              clearInterval(syncIntervalId);
              syncIntervalId = null;
            }
            storage.setSession(null);
            localStorage.removeItem('gymtracker_user');
            localStorage.removeItem('gymtracker_sessions');
            localStorage.removeItem('gymtracker_bodylog');
            localStorage.removeItem('gymtracker_last_modified');
            localStorage.removeItem('gymtracker_last_sync');
            currentUser = null;
            sessions = {};
            bodyLog = [];
            supplementLog = {};
            localStorage.removeItem('gymtracker_supplog');
            
            showAuthScreen();
            showToast("Sesión cerrada");
          }
        );
      });

      // Calendar controls
      document.getElementById('prevMonthBtn').addEventListener('click', () => {
        calendarMonthYear.setMonth(calendarMonthYear.getMonth() - 1);
        renderCalendar();
      });
      document.getElementById('nextMonthBtn').addEventListener('click', () => {
        calendarMonthYear.setMonth(calendarMonthYear.getMonth() + 1);
        renderCalendar();
      });

      // Close Day Detail drawer
      const closePanelBtn = document.getElementById('closePanelBtn');
      const panelOverlay = document.getElementById('panelOverlay');
      
      const handleClosePanel = (e) => {
        if (e) {
          if (e.cancelable) e.preventDefault();
        }
        closeDayDetailPanel();
      };
      
      if (closePanelBtn) {
        closePanelBtn.addEventListener('click', handleClosePanel);
        closePanelBtn.addEventListener('touchstart', handleClosePanel, { passive: false });
      }
      if (panelOverlay) {
        panelOverlay.addEventListener('click', handleClosePanel);
        panelOverlay.addEventListener('touchstart', handleClosePanel, { passive: false });
      }

      // Permanent Add Exercise Button in Day Panel
      var addExerciseBtn = document.getElementById('addExerciseBtn');
      if (addExerciseBtn) {
        addExerciseBtn.addEventListener('click', openAddExerciseStep1);
      }

      // Close Step 1 Add Exercise Modal
      document.getElementById('closeAddExModalStep1Btn').addEventListener('click', () => {
        document.getElementById('addExerciseModalStep1').classList.remove('open');
      });

      // Back from Step 2 to Step 1
      document.getElementById('backToAddExStep1Btn').addEventListener('click', () => {
        document.getElementById('addExerciseModalStep2').classList.remove('open');
        document.getElementById('addExerciseModalStep1').classList.add('open');
      });

      // Cancel Log sets (Step 2)
      document.getElementById('cancelLogSetsBtn').addEventListener('click', () => {
        document.getElementById('addExerciseModalStep1').classList.remove('open');
        document.getElementById('addExerciseModalStep2').classList.remove('open');
      });

      // Add Set Row in Step 2
      document.getElementById('addSetRowBtn').addEventListener('click', () => {
        addSetRow();
      });

      // Save Session Exercises submit (Step 2)
      document.getElementById('saveSessionBtn').addEventListener('click', saveActiveExerciseSession);

      // Accordion Event Delegations (for Exercise Modal Step 1)
      document.getElementById('accordionContainer').addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if (header) {
          const parent = header.parentElement;
          parent.classList.toggle('active-acc');
        }
      });

      // Live search filters
      document.getElementById('addExSearchInput').addEventListener('input', () => {
        filterStep1Exercises();
      });
      document.getElementById('libSearchInput').addEventListener('input', () => {
        renderExerciseLibrary();
      });

      const suppSearchEl = document.getElementById('suppSearchInput');
      if (suppSearchEl) {
        suppSearchEl.addEventListener('input', function() { renderSupplementLibrary(); });
      }

      // Supplement calendar modal events
      var addSuppBtn = document.getElementById('addSuppBtn');
      if (addSuppBtn) addSuppBtn.addEventListener('click', openSuppModal);

      var emptyAddSuppBtn = document.getElementById('emptyAddSuppBtn');
      if (emptyAddSuppBtn) emptyAddSuppBtn.addEventListener('click', openSuppModal);

      var saveSuppModalBtn = document.getElementById('saveSuppModalBtn');
      if (saveSuppModalBtn) saveSuppModalBtn.addEventListener('click', saveSuppModal);

      var closeSuppModalBtn = document.getElementById('closeSuppModalBtn');
      if (closeSuppModalBtn) closeSuppModalBtn.addEventListener('click', function() {
        document.getElementById('addSuppModal').classList.remove('open');
      });

      // ── Routines Tab Event Listeners ──
      const addRoutineFab = document.getElementById('addRoutineFab');
      if (addRoutineFab) {
        addRoutineFab.addEventListener('click', () => {
          currentEditingRoutineIndex = null;
          document.getElementById('routineModalTitle').textContent = "Crear Rutina";
          document.getElementById('routineNameInput').value = '';
          routineSelectedExercises = [];
          renderRoutineSelectedExercises();
          document.getElementById('routineModal').classList.add('open');
        });
      }

      const closeRoutineModalBtn = document.getElementById('closeRoutineModalBtn');
      if (closeRoutineModalBtn) {
        closeRoutineModalBtn.addEventListener('click', () => {
          document.getElementById('routineModal').classList.remove('open');
        });
      }

      const routineAddExerciseBtn = document.getElementById('routineAddExerciseBtn');
      if (routineAddExerciseBtn) {
        routineAddExerciseBtn.addEventListener('click', openRoutineExerciseSelector);
      }

      const closeRoutineExSelModalBtn = document.getElementById('closeRoutineExSelModalBtn');
      if (closeRoutineExSelModalBtn) {
        closeRoutineExSelModalBtn.addEventListener('click', () => {
          document.getElementById('routineExerciseSelectorModal').classList.remove('open');
        });
      }

      const routineExSearchInput = document.getElementById('routineExSearchInput');
      if (routineExSearchInput) {
        routineExSearchInput.addEventListener('input', () => {
          const activeChip = document.querySelector('#routineExMuscleChips .active-chip');
          const group = activeChip ? activeChip.textContent : "Todos";
          renderRoutineExSelectorAccordion(group);
        });
      }

      const saveRoutineBtn = document.getElementById('saveRoutineBtn');
      if (saveRoutineBtn) {
        saveRoutineBtn.addEventListener('click', saveRoutine);
      }

      // Day Detail - Load Routine button
      const openLoadRoutineModalBtn = document.getElementById('openLoadRoutineModalBtn');
      if (openLoadRoutineModalBtn) {
        openLoadRoutineModalBtn.addEventListener('click', openLoadRoutineModal);
      }

      const closeLoadRoutineModalBtn = document.getElementById('closeLoadRoutineModalBtn');
      if (closeLoadRoutineModalBtn) {
        closeLoadRoutineModalBtn.addEventListener('click', () => {
          document.getElementById('loadRoutineModal').classList.remove('open');
        });
      }

      // 1RM Estimated select change listener and tooltip initialization
      const oneRmExerciseSelect = document.getElementById('oneRmExerciseSelect');
      if (oneRmExerciseSelect) {
        oneRmExerciseSelect.addEventListener('change', updateOneRmDashboard);
      }
      initOneRmTooltip();
    }

    /***************************************************************************
     * 7. PROFILE VIEW LOGIC (Perfil)
     **************************************************************************/
    function renderProfile() {
      if (!currentUser || !currentUser.name) return;
      
      // Avatar initials
      const initials = currentUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
      document.getElementById('profileAvatar').textContent = initials;
      document.getElementById('profileName').textContent = currentUser.name;
      
      // Core Metrics
      const weightVal = parseFloat(currentUser.weight);
      const heightVal = parseFloat(currentUser.height);
      
      document.getElementById('metricWeight').textContent = !isNaN(weightVal) ? `${weightVal.toFixed(1)} kg` : '--';
      document.getElementById('metricHeight').textContent = !isNaN(heightVal) ? `${heightVal} cm` : '--';
      
      // Calculate IMC
      if (!isNaN(weightVal) && !isNaN(heightVal) && heightVal > 0) {
        const heightM = heightVal / 100;
        const imc = weightVal / (heightM * heightM);
        document.getElementById('metricImc').textContent = imc.toFixed(1);
      } else {
        document.getElementById('metricImc').textContent = '--';
      }

      // Sincronización Metadata
      const session = storage.getSession();
      if (session) {
        document.getElementById('cloudUserText').textContent = `Conectado como: ${session.user.email}`;
        updateSyncStatus(activeSyncStatus);
      }

      // Stat cards counts
      const totalSessions = Object.keys(sessions).length;
      document.getElementById('statSessionsCount').textContent = totalSessions;
      document.getElementById('statDaysCount').textContent = totalSessions;

      let totalExercises = 0;
      Object.values(sessions).forEach(daySession => {
        totalExercises += daySession.length;
      });
      document.getElementById('statExercisesCount').textContent = totalExercises;

      // Render sparkline
      drawSparkline();
    }

    function drawSparkline() {
      const canvas = document.getElementById('weightSparklineCanvas');
      const ctx = canvas.getContext('2d');
      
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = 60 * dpr;
      ctx.scale(dpr, dpr);

      const width = rect.width;
      const height = 60;

      ctx.clearRect(0, 0, width, height);

      const isLight = document.body.classList.contains('light-theme');
      const accentColor = isLight ? '#0052cc' : '#0066ff';
      const gradientStart = isLight ? 'rgba(0, 82, 204, 0.15)' : 'rgba(0, 102, 255, 0.25)';

      const logs = bodyLog.slice(-10);
      const sparkDiffEl = document.getElementById('sparklineDiff');

      if (logs.length < 2) {
        ctx.fillStyle = isLight ? '#4a5a78' : '#7a8ba8';
        ctx.font = '12px var(--font-body)';
        ctx.textAlign = 'center';
        ctx.fillText('Se necesitan más mediciones', width / 2, height / 2 + 4);
        sparkDiffEl.textContent = "--";
        sparkDiffEl.style.color = 'var(--text-sec)';
        return;
      }

      const firstWeight = logs[0].weight;
      const lastWeight = logs[logs.length - 1].weight;
      const diff = lastWeight - firstWeight;
      const sign = diff >= 0 ? '+' : '';
      sparkDiffEl.textContent = `${sign}${diff.toFixed(1)} kg (${sign}${((diff / firstWeight) * 100).toFixed(1)}%)`;
      sparkDiffEl.style.color = diff > 0 ? 'var(--warning)' : (diff < 0 ? 'var(--success)' : 'var(--text-sec)');

      const minWeight = Math.min(...logs.map(l => l.weight)) * 0.995;
      const maxWeight = Math.max(...logs.map(l => l.weight)) * 1.005;
      const weightRange = maxWeight - minWeight;

      const points = logs.map((log, idx) => {
        const x = (idx / (logs.length - 1)) * (width - 16) + 8;
        const y = height - ((log.weight - minWeight) / weightRange) * (height - 16) - 8;
        return { x, y };
      });

      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, gradientStart);
      grad.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.moveTo(points[0].x, height);
      points.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(points[points.length - 1].x, height);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      const lastNode = points[points.length - 1];
      ctx.beginPath();
      ctx.arc(lastNode.x, lastNode.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? '#0099cc' : '#00d4ff';
      ctx.fill();
    }

    /***************************************************************************
     * 8. CALENDAR VIEW LOGIC (Calendario)
     **************************************************************************/
    function renderCalendar() {
      const year = calendarMonthYear.getFullYear();
      const month = calendarMonthYear.getMonth();

      const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];
      document.getElementById('calendarMonthTitle').textContent = `${monthNames[month]} ${year}`;

      const gridContainer = document.getElementById('calendarDaysGrid');
      gridContainer.innerHTML = '';

      const firstDay = new Date(year, month, 1);
      let startDayOfWeek = firstDay.getDay();
      if (startDayOfWeek === 0) startDayOfWeek = 7;

      const totalDays = new Date(year, month + 1, 0).getDate();
      const prevMonthTotalDays = new Date(year, month, 0).getDate();

      for (let i = startDayOfWeek - 1; i > 0; i--) {
        const dayNum = prevMonthTotalDays - i + 1;
        const cellDate = new Date(year, month - 1, dayNum);
        createDayCell(cellDate, false, gridContainer);
      }

      for (let i = 1; i <= totalDays; i++) {
        const cellDate = new Date(year, month, i);
        createDayCell(cellDate, true, gridContainer);
      }

      const filledCells = (startDayOfWeek - 1) + totalDays;
      const remainingCells = 42 - filledCells;
      for (let i = 1; i <= remainingCells; i++) {
        const cellDate = new Date(year, month + 1, i);
        createDayCell(cellDate, false, gridContainer);
      }
    }

    function createDayCell(date, isCurrentMonth, container) {
      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-day';
      if (!isCurrentMonth) dayCell.classList.add('other-month');

      const dateStr = getFormattedDateKey(date);
      dayCell.textContent = date.getDate();

      const todayStr = getFormattedDateKey(new Date());
      if (dateStr === todayStr) {
        dayCell.classList.add('today');
      }

      const selectedStr = getFormattedDateKey(currentSelectedDate);
      if (dateStr === selectedStr) {
        dayCell.classList.add('selected');
      }

      if (sessions[dateStr] && sessions[dateStr].length > 0) {
        const dot = document.createElement('div');
        dot.className = 'session-dot';
        dayCell.appendChild(dot);
      }

      dayCell.addEventListener('click', () => {
        currentSelectedDate = new Date(date);
        renderCalendar();
        openDayDetailPanel();
      });

      container.appendChild(dayCell);
    }

    function openDayDetailPanel() {
      renderDayDetailPanel();
      
      const panel = document.getElementById('dayDetailPanel');
      const overlay = document.getElementById('panelOverlay');
      panel.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDayDetailPanel() {
      document.getElementById('dayDetailPanel').classList.remove('open');
      document.getElementById('panelOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function renderDayDetailPanel() {
      const dateStr = getFormattedDateKey(currentSelectedDate);
      
      const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
      
      const dayName = daysOfWeek[currentSelectedDate.getDay()];
      const dayNum = currentSelectedDate.getDate();
      const monthName = months[currentSelectedDate.getMonth()];
      
      document.getElementById('panelDateTitle').textContent = `${dayName}, ${dayNum} de ${monthName}`;

      const sessionContent = document.getElementById('panelSessionContent');
      const emptyState = document.getElementById('panelEmptyState');

      sessionContent.innerHTML = '';

      const daySession = sessions[dateStr];

      if (!daySession || daySession.length === 0) {
        emptyState.style.display = 'flex';
      } else {
        emptyState.style.display = 'none';

        daySession.forEach((entry, idx) => {
          const exInfo = EXERCISES.find(e => e.id === entry.exerciseId);
          if (!exInfo) return;

          const exCard = document.createElement('div');
          exCard.className = 'session-exercise-card';
          
          let setsHtml = '';
          entry.sets.forEach((set, sIdx) => {
            const weightText = exInfo.equipment === "Peso corporal" ? "Peso Corporal" : `${set.weight} kg`;
            const repsText = exInfo.animationType === "plank" ? `${set.reps} seg` : `${set.reps} reps`;
            setsHtml += `
              <div class="set-summary-row">
                <span>Serie ${sIdx + 1}</span>
                <span>${weightText} × ${repsText}</span>
              </div>
            `;
          });

          exCard.innerHTML = `
            <div class="sec-header">
              <div>
                <div class="sec-name">${exInfo.name}</div>
                <div class="chip-group">
                  <span class="chip active-chip">${exInfo.group}</span>
                  <span class="chip">${exInfo.equipment}</span>
                </div>
              </div>
              <div class="sec-actions">
                <button class="btn-action-small" onclick="editLoggedExercise(${idx})" aria-label="Editar">
                  <svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.07,6.19L3,17.25Z"/></svg>
                </button>
                <button class="btn-action-small danger" onclick="deleteLoggedExercise(${idx})" aria-label="Eliminar">
                  <svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg>
                </button>
              </div>
            </div>
            <div class="sets-summary">
              ${setsHtml}
            </div>
          `;

          sessionContent.appendChild(exCard);
        });
      }

      // ── Supplements section ──
      renderPanelSupplements(dateStr);
    }


    /***************************************************************************
     * SUPPLEMENT CALENDAR INTEGRATION
     **************************************************************************/
    function renderPanelSupplements(dateStr) {
      var container = document.getElementById('panelSuppSection');
      if (!container) return;
      var taken = (supplementLog[dateStr] || []);
      var html = '';
      if (taken.length === 0) {
        html = '<p class="panel-supp-empty">Sin suplementos registrados</p>';
      } else {
        taken.forEach(function(suppId) {
          var s = SUPPLEMENTS.find(function(x) { return x.id === suppId; });
          if (!s) return;
          html += '<div class="session-exercise-card panel-supp-card">' +
            '<div class="sec-header" style="align-items: center; display: flex; justify-content: space-between;">' +
              '<div style="display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;">' +
                '<div class="panel-supp-icon" style="width: 32px; height: 32px; flex-shrink: 0;">' +
                  (SUPPLEMENT_ICONS[s.iconType] || SUPPLEMENT_ICONS.capsule) +
                '</div>' +
                '<div style="min-width: 0; flex: 1;">' +
                  '<div class="sec-name" style="font-size: 0.9rem; font-weight: 600; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' + s.name + '</div>' +
                  '<div class="chip-group" style="display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap;">' +
                    '<span class="chip active-chip" style="font-size: 0.7rem; padding: 2px 6px;">' + s.category + '</span>' +
                    '<span class="chip" style="font-size: 0.7rem; padding: 2px 6px;">' + s.dose + '</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="sec-actions" style="display: flex; gap: 4px; flex-shrink: 0;">' +
                '<button class="btn-action-small" onclick="openSuppModal()" aria-label="Editar">' +
                  '<svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: currentColor;"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.07,6.19L3,17.25Z"/></svg>' +
                '</button>' +
                '<button class="btn-action-small danger" onclick="deleteLoggedSupplement(\'' + s.id + '\')" aria-label="Eliminar">' +
                  '<svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: currentColor;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>';
        });
      }
      container.innerHTML = html;
    }

    function openSuppModal() {
      var dateStr = getFormattedDateKey(currentSelectedDate);
      var taken = (supplementLog[dateStr] || []);
      var modal = document.getElementById('addSuppModal');
      var listEl = document.getElementById('suppModalList');
      listEl.innerHTML = '';

      var categories = ["Proteinas", "Creatinas", "Aminoacidos", "Quemadores", "Vitaminas", "Otros"];
      categories.forEach(function(cat) {
        var catSupps = SUPPLEMENTS.filter(function(s) { return s.category === cat; });
        if (catSupps.length === 0) return;
        var catEl = document.createElement('div');
        catEl.className = 'supp-modal-category';
        catEl.innerHTML = '<div class="supp-modal-cat-label">' + cat + '</div>';

        catSupps.forEach(function(s) {
          var isTaken = taken.includes(s.id);
          var item = document.createElement('button');
          item.className = 'supp-modal-item' + (isTaken ? ' selected' : '');
          item.dataset.suppId = s.id;
          item.innerHTML =
            '<div class="supp-modal-item-icon">' + (SUPPLEMENT_ICONS[s.iconType] || SUPPLEMENT_ICONS.capsule) + '</div>' +
            '<div class="supp-modal-item-info">' +
              '<div class="supp-modal-item-name">' + s.name + '</div>' +
              '<div class="supp-modal-item-dose">' + s.dose + '</div>' +
            '</div>' +
            '<div class="supp-modal-item-check">' +
              '<svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>' +
            '</div>';

          item.addEventListener('click', function() {
            item.classList.toggle('selected');
          });

          catEl.appendChild(item);
        });

        listEl.appendChild(catEl);
      });

      // Set date label
      var daysOfWeek = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
      var months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
      var d = currentSelectedDate;
      document.getElementById('suppModalDateLabel').textContent =
        daysOfWeek[d.getDay()] + ', ' + d.getDate() + ' de ' + months[d.getMonth()];

      modal.classList.add('open');
    }

    function saveSuppModal() {
      var dateStr = getFormattedDateKey(currentSelectedDate);
      var selected = [];
      document.querySelectorAll('#suppModalList .supp-modal-item.selected').forEach(function(el) {
        selected.push(el.dataset.suppId);
      });
      supplementLog[dateStr] = selected;
      storage.setSupplementLog(supplementLog);
      document.getElementById('addSuppModal').classList.remove('open');
      
      closeDayDetailPanel();
      
      renderPanelSupplements(dateStr);
      renderCalendar();
      syncWithCloud();
      showToast('Suplementos del dia guardados');
    }

    function deleteLoggedExercise(idx) {
      const dateStr = getFormattedDateKey(currentSelectedDate);
      if (sessions[dateStr]) {
        sessions[dateStr].splice(idx, 1);
        if (sessions[dateStr].length === 0) {
          delete sessions[dateStr];
        }
        storage.setSessions(sessions);
        renderDayDetailPanel();
        renderCalendar();
        showToast("Ejercicio eliminado");
        
        // Sync changes
        syncWithCloud();
      }
    }

    function deleteLoggedSupplement(suppId) {
      const dateStr = getFormattedDateKey(currentSelectedDate);
      if (supplementLog[dateStr]) {
        supplementLog[dateStr] = supplementLog[dateStr].filter(function(id) {
          return id !== suppId;
        });
        if (supplementLog[dateStr].length === 0) {
          delete supplementLog[dateStr];
        }
        storage.setSupplementLog(supplementLog);
        renderPanelSupplements(dateStr);
        renderCalendar();
        showToast("Suplemento eliminado");
        
        // Sync changes
        syncWithCloud();
      }
    }
    window.deleteLoggedSupplement = deleteLoggedSupplement;

    function editLoggedExercise(idx) {
      const dateStr = getFormattedDateKey(currentSelectedDate);
      const daySession = sessions[dateStr];
      if (!daySession) return;

      const entry = daySession[idx];
      const exInfo = EXERCISES.find(e => e.id === entry.exerciseId);
      if (!exInfo) return;

      isEditingExerciseIndex = idx;
      openAddExerciseStep2(exInfo, entry.sets);
    }

    /***************************************************************************
     * 9. ADD EXERCISE FLOW LOGIC
     **************************************************************************/
    function openAddExerciseStep1() {
      document.getElementById('addExSearchInput').value = '';
      
      renderStep1MuscleChips();
      renderStep1ExercisesAccordion("Todos");
      
      document.getElementById('addExerciseModalStep1').classList.add('open');
    }

    function renderStep1MuscleChips() {
      const container = document.getElementById('addExMuscleChips');
      container.innerHTML = '';

      const groups = ["Todos", "Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas", "Abdominales"];
      groups.forEach(group => {
        const chip = document.createElement('button');
        chip.className = `chip ${group === "Todos" ? "active-chip" : ""}`;
        chip.textContent = group;
        chip.addEventListener('click', (e) => {
          container.querySelectorAll('.chip').forEach(c => c.classList.remove('active-chip'));
          chip.classList.add('active-chip');
          renderStep1ExercisesAccordion(group);
        });
        container.appendChild(chip);
      });
    }

    function renderStep1ExercisesAccordion(filterMuscleGroup) {
      const container = document.getElementById('accordionContainer');
      container.innerHTML = '';

      const query = document.getElementById('addExSearchInput').value.trim().toLowerCase();
      const muscleGroups = ["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas", "Abdominales"];

      muscleGroups.forEach(group => {
        if (filterMuscleGroup !== "Todos" && filterMuscleGroup !== group) return;

        const filtered = EXERCISES.filter(ex => {
          const matchGroup = ex.group === group;
          const matchQuery = ex.name.toLowerCase().includes(query) || ex.description.toLowerCase().includes(query);
          return matchGroup && matchQuery;
        });

        if (filtered.length === 0) return;

        const accSection = document.createElement('div');
        accSection.className = 'accordion-section';
        if (query.length > 0 || filterMuscleGroup !== "Todos") {
          accSection.classList.add('active-acc');
        }

        let itemsHtml = '';
        filtered.forEach(ex => {
          itemsHtml += `
            <div class="exercise-list-item" data-ex-id="${ex.id}">
              <div class="ex-list-details">
                <span class="ex-list-name">${ex.name}</span>
                <div class="chip-group">
                  <span class="chip active-chip">${ex.group}</span>
                  <span class="chip">${ex.equipment}</span>
                </div>
              </div>
              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: var(--accent-sec);">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
              </svg>
            </div>
          `;
        });

        accSection.innerHTML = `
          <div class="accordion-header">
            <h3>${group}</h3>
            <svg class="accordion-header-arrow" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
          </div>
          <div class="accordion-content">
            ${itemsHtml}
          </div>
        `;

        accSection.querySelectorAll('.exercise-list-item').forEach(item => {
          item.addEventListener('click', (e) => {
            const exId = item.getAttribute('data-ex-id');
            const ex = EXERCISES.find(x => x.id === exId);
            isEditingExerciseIndex = null;
            openStep2(ex);
          });
        });

        container.appendChild(accSection);
      });

      if (container.children.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <p>No se encontraron ejercicios correspondientes.</p>
          </div>
        `;
      }
    }

    function filterStep1Exercises() {
      let activeGroup = "Todos";
      const chips = document.getElementById('addExMuscleChips').querySelectorAll('.chip');
      chips.forEach(c => {
        if (c.classList.contains('active-chip')) {
          activeGroup = c.textContent;
        }
      });
      renderStep1ExercisesAccordion(activeGroup);
    }

    let currentExerciseStep2 = null;

    function openStep2(exercise) {
      document.getElementById('addExerciseModalStep1').classList.remove('open');
      openAddExerciseStep2(exercise);
    }

    function openAddExerciseStep2(exercise, existingSets = null) {
      currentExerciseStep2 = exercise;
      document.getElementById('step2ExerciseName').textContent = exercise.name;
      document.getElementById('step2MuscleChip').textContent = exercise.group;
      document.getElementById('step2EquipmentChip').textContent = exercise.equipment;
      
      document.getElementById('step2AnimContainer').innerHTML = getAnimationSVG(exercise.animationType);
      document.getElementById('saveSessionBtn').setAttribute('data-ex-id', exercise.id);

      // Update table headers for bodyweight and isometric
      const headers = document.querySelectorAll('#addExerciseModalStep2 .sets-table th');
      if (headers.length >= 3) {
        if (exercise.equipment === "Peso corporal") {
          headers[1].textContent = "Peso (Corporal)";
        } else {
          headers[1].textContent = "Peso (kg)";
        }
        if (exercise.animationType === "plank") {
          headers[2].textContent = "Segundos";
        } else {
          headers[2].textContent = "Reps";
        }
      }

      const tableBody = document.getElementById('setsTableBody');
      tableBody.innerHTML = '';

      if (existingSets && existingSets.length > 0) {
        existingSets.forEach((set, idx) => {
          addSetRow(set.weight, set.reps);
        });
      } else {
        addSetRow(0, 0);
      }

      document.getElementById('addExerciseModalStep2').classList.add('open');
    }

    function addSetRow(weight = 0, reps = 0) {
      const tableBody = document.getElementById('setsTableBody');
      const rowCount = tableBody.children.length;
      if (rowCount >= 20) {
        showToast("Límite de 20 series por ejercicio");
        return;
      }

      const row = document.createElement('tr');
      row.className = 'set-row';
      
      const isBodyweight = currentExerciseStep2 && currentExerciseStep2.equipment === "Peso corporal";
      const displayWeight = isBodyweight ? 0 : weight;
      const weightDisabledAttr = isBodyweight ? "disabled" : "";

      row.innerHTML = `
        <td><span class="set-number-label">${rowCount + 1}</span></td>
        <td>
          <div class="set-row-stepper">
            <button type="button" class="btn-step-minus-weight" ${weightDisabledAttr}>−</button>
            <input type="number" class="set-weight-input" step="2.5" min="0" max="999" value="${isBodyweight ? 0 : (displayWeight > 0 ? displayWeight : '')}" placeholder="${isBodyweight ? '0' : '0'}" ${weightDisabledAttr}>
            <button type="button" class="btn-step-plus-weight" ${weightDisabledAttr}>＋</button>
          </div>
        </td>
        <td>
          <div class="set-row-stepper">
            <button type="button" class="btn-step-minus-reps">−</button>
            <input type="number" class="set-reps-input" step="1" min="0" max="99" value="${reps > 0 ? reps : ''}" placeholder="0">
            <button type="button" class="btn-step-plus-reps">＋</button>
          </div>
        </td>
        <td>
          <button type="button" class="btn-action-small danger btn-delete-set" style="margin: 0 auto; display:block;" aria-label="Quitar">
            <svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg>
          </button>
        </td>
      `;

      const weightInput = row.querySelector('.set-weight-input');
      const repsInput = row.querySelector('.set-reps-input');

      row.querySelector('.btn-step-minus-weight').addEventListener('click', () => {
        if (isBodyweight) return;
        let val = parseFloat(weightInput.value) || 0;
        val = Math.max(0, val - 2.5);
        weightInput.value = val % 1 === 0 ? val : val.toFixed(1);
      });
      row.querySelector('.btn-step-plus-weight').addEventListener('click', () => {
        if (isBodyweight) return;
        let val = parseFloat(weightInput.value) || 0;
        val = val + 2.5;
        weightInput.value = val % 1 === 0 ? val : val.toFixed(1);
      });

      row.querySelector('.btn-step-minus-reps').addEventListener('click', () => {
        let val = parseInt(repsInput.value) || 0;
        repsInput.value = Math.max(0, val - 1);
      });
      row.querySelector('.btn-step-plus-reps').addEventListener('click', () => {
        let val = parseInt(repsInput.value) || 0;
        repsInput.value = val + 1;
      });

      row.querySelector('.btn-delete-set').addEventListener('click', () => {
        row.remove();
        tableBody.querySelectorAll('.set-row').forEach((r, idx) => {
          r.querySelector('.set-number-label').textContent = idx + 1;
        });
      });

      tableBody.appendChild(row);
    }

    function saveActiveExerciseSession() {
      const exerciseId = document.getElementById('saveSessionBtn').getAttribute('data-ex-id');
      const tableBody = document.getElementById('setsTableBody');
      const rows = tableBody.querySelectorAll('.set-row');

      const sets = [];
      let valid = true;

      rows.forEach((row) => {
        const weightInputEl = row.querySelector('.set-weight-input');
        const repsInputEl = row.querySelector('.set-reps-input');
        
        let weightVal = parseFloat(weightInputEl.value);
        if (weightInputEl.disabled || weightInputEl.readOnly) {
          weightVal = 0;
        }
        
        const repsVal = parseInt(repsInputEl.value);

        if (isNaN(weightVal) || isNaN(repsVal) || weightVal < 0 || repsVal <= 0) {
          valid = false;
        } else {
          sets.push({ weight: weightVal, reps: repsVal });
        }
      });

      if (!valid || sets.length === 0) {
        showToast("Completá valores válidos en todas las series");
        return;
      }

      const dateStr = getFormattedDateKey(currentSelectedDate);
      if (!sessions[dateStr]) {
        sessions[dateStr] = [];
      }

      const newEntry = { exerciseId, sets };

      if (isEditingExerciseIndex !== null) {
        sessions[dateStr][isEditingExerciseIndex] = newEntry;
      } else {
        sessions[dateStr].push(newEntry);
      }

      storage.setSessions(sessions);
      document.getElementById('addExerciseModalStep1').classList.remove('open');
      document.getElementById('addExerciseModalStep2').classList.remove('open');
      
      closeDayDetailPanel();
      
      renderCalendar();
      renderDayDetailPanel();
      
      showToast("✓ Sesión guardada");

      // Sync changes
      syncWithCloud();
    }

    /***************************************************************************
     * 10. PROGRESS VIEW LOGIC & VANILLA CANVAS CHARTS (Progreso)
     **************************************************************************/
    function renderProgress() {
      calculateStreak();
      renderPersonalRecords();
      drawProgressCharts();
      renderSupplementAdherence();
    }


    /***************************************************************************
     * SUPPLEMENT ADHERENCE METRICS
     **************************************************************************/
    function renderSupplementAdherence() {
      var container = document.getElementById('suppAdherenceList');
      if (!container) return;
      container.innerHTML = '';

      // Build last-30-days set
      var today = new Date();
      var last30 = [];
      for (var i = 0; i < 30; i++) {
        var d = new Date(today);
        d.setDate(today.getDate() - i);
        last30.push(getFormattedDateKey(d));
      }

      // Count days taken per supplement
      var counts = {}; // suppId -> Set of dateKeys
      last30.forEach(function(dateKey) {
        var taken = supplementLog[dateKey] || [];
        taken.forEach(function(suppId) {
          if (!counts[suppId]) counts[suppId] = 0;
          counts[suppId]++;
        });
      });

      var suppIds = Object.keys(counts);
      if (suppIds.length === 0) {
        container.innerHTML = '<p style="color:var(--text-sec); font-size:0.85rem; padding:8px 0;">Todavia no registraste suplementos. Registralos desde el Calendario.</p>';
        return;
      }

      // Sort by count descending
      suppIds.sort(function(a, b) { return counts[b] - counts[a]; });

      suppIds.forEach(function(suppId) {
        var s = SUPPLEMENTS.find(function(x) { return x.id === suppId; });
        if (!s) return;
        var dayCount = counts[suppId];
        var pct = Math.round((dayCount / 30) * 100);

        // Calculate current streak
        var streak = 0;
        var todayStr = getFormattedDateKey(new Date());
        var checkDate = new Date();
        while (true) {
          var dk = getFormattedDateKey(checkDate);
          var taken = supplementLog[dk] || [];
          if (taken.includes(suppId)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
          } else {
            break;
          }
        }

        // Bar color based on adherence
        var barColor = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--accent-sec)' : 'var(--accent)';

        var row = document.createElement('div');
        row.className = 'supp-adherence-row';
        row.innerHTML =
          '<div class="supp-adh-icon">' + (SUPPLEMENT_ICONS[s.iconType] || SUPPLEMENT_ICONS.capsule) + '</div>' +
          '<div class="supp-adh-info">' +
            '<div class="supp-adh-header">' +
              '<span class="supp-adh-name">' + s.name + '</span>' +
              (streak > 0 ? '<span class="supp-adh-streak">🔥 ' + streak + 'd racha</span>' : '') +
            '</div>' +
            '<div class="supp-adh-bar-wrap">' +
              '<div class="supp-adh-bar" style="width:' + pct + '%; background:' + barColor + ';"></div>' +
            '</div>' +
            '<div class="supp-adh-stats">' +
              '<span>' + dayCount + ' de 30 dias</span>' +
              '<span class="supp-adh-pct">' + pct + '%</span>' +
            '</div>' +
          '</div>';

        container.appendChild(row);
      });
    }

    function calculateStreak() {
      const dates = Object.keys(sessions)
        .filter(k => sessions[k] && sessions[k].length > 0)
        .sort((a,b) => new Date(b) - new Date(a));

      const streakDisplay = document.getElementById('streakDaysCountDisplay');

      if (dates.length === 0) {
        streakDisplay.textContent = "0 días seguidos";
        return;
      }

      const todayStr = getFormattedDateKey(new Date());
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = getFormattedDateKey(yesterday);

      if (dates[0] !== todayStr && dates[0] !== yesterdayStr) {
        streakDisplay.textContent = "0 días seguidos";
        return;
      }

      let streak = 1;
      let prevDateObj = new Date(dates[0]);

      for (let i = 1; i < dates.length; i++) {
        const currentDateObj = new Date(dates[i]);
        const diffTime = Math.abs(prevDateObj - currentDateObj);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          streak++;
          prevDateObj = currentDateObj;
        } else if (diffDays > 1) {
          break;
        }
      }

      streakDisplay.textContent = `${streak} ${streak === 1 ? 'día' : 'días'} de racha`;
    }

    function renderPersonalRecords() {
      const prs = {};

      Object.keys(sessions).forEach(dateStr => {
        sessions[dateStr].forEach(entry => {
          const exerciseId = entry.exerciseId;
          entry.sets.forEach(set => {
            if (!prs[exerciseId] || set.weight > prs[exerciseId].weight) {
              prs[exerciseId] = {
                weight: set.weight,
                reps: set.reps,
                date: dateStr
              };
            } else if (set.weight === prs[exerciseId].weight && set.reps > prs[exerciseId].reps) {
              prs[exerciseId] = {
                weight: set.weight,
                reps: set.reps,
                date: dateStr
              };
            }
          });
        });
      });

      const prsContainer = document.getElementById('prsContainer');
      prsContainer.innerHTML = '';

      const prList = Object.keys(prs).map(key => {
        const ex = EXERCISES.find(e => e.id === key);
        return {
          ...prs[key],
          exerciseId: key,
          name: ex ? ex.name : "Desconocido"
        };
      }).sort((a,b) => new Date(b.date) - new Date(a.date));

      if (prList.length === 0) {
        prsContainer.innerHTML = `
          <div class="empty-state" style="padding: 16px;">
            <p>Aún no registraste récords personales.</p>
          </div>
        `;
        return;
      }

      prList.forEach(pr => {
        const prRow = document.createElement('div');
        prRow.className = 'pr-item';
        
        const prDateObj = new Date(pr.date);
        const formattedDate = prDateObj.toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' });

        prRow.innerHTML = `
          <div class="pr-details">
            <span class="pr-exname">${pr.name}</span>
            <span class="pr-date">Logrado el ${formattedDate}</span>
          </div>
          <div class="pr-stats">
            <div class="pr-weight">${pr.weight} kg</div>
            <div class="pr-reps">× ${pr.reps} reps</div>
          </div>
        `;
        prsContainer.appendChild(prRow);
      });
    }

    function drawProgressCharts() {
      drawWeightHistoryChart();
      drawVolumeBarChart();
      drawMuscleDonutChart();
      updateOneRmDashboard();
    }

    function handleChartsResize() {
      if (currentActiveView === 'perfil') {
        drawSparkline();
      } else if (currentActiveView === 'progreso') {
        drawProgressCharts();
      }
    }

    function drawWeightHistoryChart() {
      const canvas = document.getElementById('weightLineChartCanvas');
      const ctx = canvas.getContext('2d');
      
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = 180 * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = 180;

      ctx.clearRect(0, 0, w, h);

      const isLight = document.body.classList.contains('light-theme');
      const textColor = isLight ? '#4a5a78' : '#7a8ba8';
      const gridColor = isLight ? '#e2e8f5' : '#1e2a3a';
      const accentColor = isLight ? '#0052cc' : '#0066ff';
      const gradientStart = isLight ? 'rgba(0, 82, 204, 0.12)' : 'rgba(0, 102, 255, 0.2)';

      const curW = document.getElementById('progressWeightCurrent');
      const startW = document.getElementById('progressWeightStart');
      const minW = document.getElementById('progressWeightMin');
      const maxW = document.getElementById('progressWeightMax');

      if (bodyLog.length === 0) {
        ctx.fillStyle = textColor;
        ctx.font = '13px var(--font-body)';
        ctx.textAlign = 'center';
        ctx.fillText('No hay datos de peso registrados', w / 2, h / 2);
        
        curW.textContent = "--";
        startW.textContent = "--";
        minW.textContent = "--";
        maxW.textContent = "--";
        return;
      }

      const weights = bodyLog.map(l => l.weight);
      curW.textContent = `${weights[weights.length - 1].toFixed(1)} kg`;
      startW.textContent = `${weights[0].toFixed(1)} kg`;
      minW.textContent = `${Math.min(...weights).toFixed(1)} kg`;
      maxW.textContent = `${Math.max(...weights).toFixed(1)} kg`;

      if (bodyLog.length < 2) {
        ctx.fillStyle = textColor;
        ctx.font = '13px var(--font-body)';
        ctx.textAlign = 'center';
        ctx.fillText('Registrá más pesajes para generar gráfico', w / 2, h / 2);
        return;
      }

      const paddingLeft = 40;
      const paddingRight = 16;
      const paddingTop = 20;
      const paddingBottom = 30;

      const chartW = w - paddingLeft - paddingRight;
      const chartH = h - paddingTop - paddingBottom;

      const minWVal = Math.min(...weights) - 2;
      const maxWVal = Math.max(...weights) + 2;
      const weightRange = maxWVal - minWVal;

      const gridSteps = 4;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.font = '10px var(--font-mono)';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'right';

      for (let i = 0; i <= gridSteps; i++) {
        const yVal = minWVal + (weightRange * (i / gridSteps));
        const y = h - paddingBottom - (chartH * (i / gridSteps));
        
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();

        ctx.fillText(yVal.toFixed(0), paddingLeft - 8, y + 4);
      }

      const points = bodyLog.map((log, idx) => {
        const x = paddingLeft + (chartW * (idx / (bodyLog.length - 1)));
        const y = h - paddingBottom - (((log.weight - minWVal) / weightRange) * chartH);
        return { x, y, date: new Date(log.date) };
      });

      const areaGrad = ctx.createLinearGradient(0, 0, 0, h);
      areaGrad.addColorStop(0, gradientStart);
      areaGrad.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.moveTo(points[0].x, h - paddingBottom);
      points.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(points[points.length - 1].x, h - paddingBottom);
      ctx.closePath();
      ctx.fillStyle = areaGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = isLight ? '#0099cc' : '#00d4ff';
      points.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      const labelIndices = [0];
      if (bodyLog.length > 2) {
        labelIndices.push(Math.floor((bodyLog.length - 1) / 2));
      }
      if (bodyLog.length > 1) {
        labelIndices.push(bodyLog.length - 1);
      }

      labelIndices.forEach(idx => {
        const pt = points[idx];
        const dayStr = pt.date.getDate().toString().padStart(2, '0');
        const monthStr = (pt.date.getMonth() + 1).toString().padStart(2, '0');
        ctx.fillText(`${dayStr}/${monthStr}`, pt.x, h - 12);
      });
    }

    function drawVolumeBarChart() {
      const canvas = document.getElementById('volumeBarChartCanvas');
      const ctx = canvas.getContext('2d');

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = 180 * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = 180;

      ctx.clearRect(0, 0, w, h);

      const isLight = document.body.classList.contains('light-theme');
      const textColor = isLight ? '#4a5a78' : '#7a8ba8';
      const gridColor = isLight ? '#e2e8f5' : '#1e2a3a';
      const barColorStart = isLight ? '#0052cc' : '#0066ff';
      const barColorEnd = isLight ? '#0099cc' : '#00d4ff';

      const datesArr = [];
      for (let i = 29; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        datesArr.push(getFormattedDateKey(d));
      }

      let maxVol = 0;
      const dailyVolume = datesArr.map(dateStr => {
        let vol = 0;
        const daySession = sessions[dateStr];
        if (daySession) {
          daySession.forEach(entry => {
            entry.sets.forEach(set => {
              vol += set.weight * set.reps;
            });
          });
        }
        if (vol > maxVol) maxVol = vol;
        return { dateStr, volume: vol };
      });

      const activeSessionsCount = dailyVolume.filter(v => v.volume > 0).length;
      if (activeSessionsCount === 0) {
        ctx.fillStyle = textColor;
        ctx.font = '13px var(--font-body)';
        ctx.textAlign = 'center';
        ctx.fillText('Sin volumen de entrenamiento registrado', w / 2, h / 2);
        return;
      }

      const paddingLeft = 45;
      const paddingRight = 10;
      const paddingTop = 20;
      const paddingBottom = 30;

      const chartW = w - paddingLeft - paddingRight;
      const chartH = h - paddingTop - paddingBottom;

      const gridSteps = 4;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.font = '10px var(--font-mono)';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'right';

      const scaleMax = maxVol > 0 ? Math.ceil(maxVol / 100) * 100 : 1000;

      for (let i = 0; i <= gridSteps; i++) {
        const yVal = (scaleMax / gridSteps) * i;
        const y = h - paddingBottom - (chartH * (i / gridSteps));

        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();

        ctx.fillText(`${yVal.toFixed(0)} kg`, paddingLeft - 8, y + 4);
      }

      const barPadding = 4;
      const barW = (chartW / datesArr.length) - barPadding;

      ctx.fillStyle = barColorStart;

      dailyVolume.forEach((data, idx) => {
        if (data.volume === 0) return;

        const x = paddingLeft + (idx * (chartW / datesArr.length)) + (barPadding / 2);
        const barH = (data.volume / scaleMax) * chartH;
        const y = h - paddingBottom - barH;

        const barGrad = ctx.createLinearGradient(x, y, x, h - paddingBottom);
        barGrad.addColorStop(0, barColorEnd);
        barGrad.addColorStop(1, barColorStart);
        ctx.fillStyle = barGrad;

        drawRoundedRect(ctx, x, y, barW, barH, Math.min(barW / 2, 4));
        ctx.fill();
      });

      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.font = '9px var(--font-mono)';

      dailyVolume.forEach((data, idx) => {
        if (data.volume === 0) return;
        const x = paddingLeft + (idx * (chartW / datesArr.length)) + (barW / 2) + (barPadding / 2);
        
        const dateObj = new Date(data.dateStr);
        const dayLabel = dateObj.getDate().toString().padStart(2, '0');
        ctx.fillText(dayLabel, x, h - 12);
      });
    }

    function drawRoundedRect(ctx, x, y, width, height, radius) {
      if (height === 0) return;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height);
      ctx.lineTo(x, y + height);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function drawMuscleDonutChart() {
      const canvas = document.getElementById('muscleDonutCanvas');
      const ctx = canvas.getContext('2d');

      const dpr = window.devicePixelRatio || 1;
      canvas.width = 130 * dpr;
      canvas.height = 130 * dpr;
      ctx.scale(dpr, dpr);

      const w = 130;
      const h = 130;

      ctx.clearRect(0, 0, w, h);

      const isLight = document.body.classList.contains('light-theme');
      const legendContainer = document.getElementById('muscleLegend');
      legendContainer.innerHTML = '';

      const counts = {};
      let totalExercisesLogged = 0;

      Object.values(sessions).forEach(daySession => {
        daySession.forEach(entry => {
          const ex = EXERCISES.find(e => e.id === entry.exerciseId);
          if (ex) {
            counts[ex.group] = (counts[ex.group] || 0) + 1;
            totalExercisesLogged++;
          }
        });
      });

      if (totalExercisesLogged === 0) {
        ctx.strokeStyle = isLight ? '#c5d3ef' : '#1e2a3a';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, 45, 0, Math.PI * 2);
        ctx.stroke();

        legendContainer.innerHTML = `
          <div class="empty-state" style="padding:0; text-align:left; align-items:flex-start;">
            <p style="font-size:0.8rem;">Sin datos de entrenamientos</p>
          </div>
        `;
        return;
      }

      const colors = {
        "Pecho": "#0066ff",
        "Espalda": "#00d4ff",
        "Hombros": "#8a2be2",
        "Bíceps": "#ffd740",
        "Tríceps": "#ff4444",
        "Piernas": "#00e676"
      };

      let startAngle = -Math.PI / 2;
      const data = Object.keys(counts).map(group => {
        return {
          group,
          count: counts[group],
          pct: counts[group] / totalExercisesLogged,
          color: colors[group] || "#7a8ba8"
        };
      }).sort((a,b) => b.count - a.count);

      data.forEach(slice => {
        const sliceAngle = slice.pct * Math.PI * 2;
        
        ctx.fillStyle = slice.color;
        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, 58, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        startAngle += sliceAngle;

        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
          <div class="legend-color" style="background-color: ${slice.color}"></div>
          <span class="legend-text">${slice.group}</span>
          <span class="legend-pct">${(slice.pct * 100).toFixed(0)}%</span>
        `;
        legendContainer.appendChild(legendItem);
      });

      ctx.fillStyle = isLight ? '#ffffff' : '#0f1117';
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 42, 0, Math.PI * 2);
      ctx.fill();
    }

    /***************************************************************************
     * 10.5 1RM ESTIMATED DASHBOARD (Epley Formula)
     **************************************************************************/
    function calc1RM(weight, reps) {
      if (reps === 1) return weight;
      return weight * (1 + reps / 30);
    }

    function updateOneRmDashboard() {
      const select = document.getElementById('oneRmExerciseSelect');
      const content = document.getElementById('oneRmContent');
      const emptyState = document.getElementById('oneRmEmptyState');
      if (!select || !content || !emptyState) return;

      // Find all exercise IDs with history (excluding bodyweight exercises)
      const exerciseIdsWithHistory = [];
      Object.keys(sessions).forEach(dateStr => {
        const daySession = sessions[dateStr] || [];
        daySession.forEach(entry => {
          const exInfo = EXERCISES.find(e => e.id === entry.exerciseId);
          if (exInfo && exInfo.equipment !== "Peso corporal" && entry.sets && entry.sets.length > 0) {
            if (!exerciseIdsWithHistory.includes(entry.exerciseId)) {
              exerciseIdsWithHistory.push(entry.exerciseId);
            }
          }
        });
      });

      if (exerciseIdsWithHistory.length === 0) {
        content.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
      }

      content.style.display = 'block';
      emptyState.style.display = 'none';

      // Sort exercise options by frequency (most sessions first)
      const frequency = {};
      exerciseIdsWithHistory.forEach(id => {
        frequency[id] = 0;
        Object.keys(sessions).forEach(dateStr => {
          const daySession = sessions[dateStr] || [];
          if (daySession.some(e => e.exerciseId === id)) {
            frequency[id]++;
          }
        });
      });

      exerciseIdsWithHistory.sort((a, b) => frequency[b] - frequency[a]);

      // Populate select options if they are different
      const currentOptions = Array.from(select.options).map(o => o.value);
      const optionsChanged = exerciseIdsWithHistory.length !== currentOptions.length ||
        !exerciseIdsWithHistory.every((id, idx) => id === currentOptions[idx]);

      if (optionsChanged) {
        select.innerHTML = '';
        exerciseIdsWithHistory.forEach(id => {
          const exInfo = EXERCISES.find(e => e.id === id);
          if (exInfo) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = exInfo.name;
            select.appendChild(option);
          }
        });
        
        // Select the first one by default (the most frequent)
        if (exerciseIdsWithHistory.length > 0) {
          select.value = exerciseIdsWithHistory[0];
        }
      }

      const selectedExerciseId = select.value;
      if (!selectedExerciseId) return;

      // Build history for the selected exercise
      const history = [];
      Object.keys(sessions).forEach(dateStr => {
        const daySession = sessions[dateStr] || [];
        const entries = daySession.filter(entry => entry.exerciseId === selectedExerciseId);
        if (entries.length > 0) {
          let maxRmForDay = 0;
          entries.forEach(entry => {
            if (entry.sets) {
              entry.sets.forEach(set => {
                const weight = Number(set.weight) || 0;
                const reps = Number(set.reps) || 0;
                let rm = 0;
                if (reps === 1) {
                  rm = weight;
                } else if (reps > 1) {
                  rm = weight * (1 + reps / 30);
                }
                if (rm > maxRmForDay) {
                  maxRmForDay = rm;
                }
              });
            }
          });
          if (maxRmForDay > 0) {
            history.push({ date: dateStr, rm: maxRmForDay });
          }
        }
      });

      history.sort((a, b) => new Date(a.date) - new Date(b.date));

      if (history.length === 0) {
        content.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
      }

      // 1. Calculate Metrics
      const currentRm = history[history.length - 1].rm;
      const bestRm = Math.max(...history.map(h => h.rm));
      const firstRm = history[0].rm;
      const diff = currentRm - firstRm;

      document.getElementById('oneRmCurrent').textContent = `${currentRm.toFixed(1)} kg`;
      document.getElementById('oneRmBest').textContent = `${bestRm.toFixed(1)} kg`;

      const progressEl = document.getElementById('oneRmProgress');
      if (diff > 0) {
        progressEl.textContent = `+${diff.toFixed(1)} kg`;
        progressEl.style.color = 'var(--success)';
        progressEl.style.fontWeight = '700';
      } else if (diff < 0) {
        progressEl.textContent = `${diff.toFixed(1)} kg`;
        progressEl.style.color = 'var(--danger)';
        progressEl.style.fontWeight = '700';
      } else {
        progressEl.textContent = `0.0 kg`;
        progressEl.style.color = 'var(--text-sec)';
        progressEl.style.fontWeight = 'normal';
      }

      // 2. Draw Chart
      drawOneRmChart(history);

      // 3. Render training zones
      const zonesBody = document.getElementById('oneRmZonesBody');
      const zones = [
        { name: "Fuerza máxima", pctMin: 90, pctMax: 95, reps: "1–3" },
        { name: "Fuerza / potencia", pctMin: 80, pctMax: 85, reps: "3–5" },
        { name: "Hipertrofia", pctMin: 70, pctMax: 80, reps: "6–12" },
        { name: "Resistencia", pctMin: 60, pctMax: 70, reps: "12–20" }
      ];

      function formatZoneWeight(val) {
        const rounded = Math.round(val * 2) / 2;
        return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(1);
      }

      let tableRows = '';
      zones.forEach(zone => {
        const weightMin = formatZoneWeight(currentRm * (zone.pctMin / 100));
        const weightMax = formatZoneWeight(currentRm * (zone.pctMax / 100));
        
        tableRows += `
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 10px; color: var(--text); font-weight: 500;">${zone.name}</td>
            <td style="padding: 12px 10px; color: var(--text-sec); font-family: var(--font-mono);">${zone.pctMin}–${zone.pctMax}%</td>
            <td style="padding: 12px 10px; color: var(--accent); font-weight: 700; font-family: var(--font-mono);">${weightMin}–${weightMax} kg</td>
            <td style="padding: 12px 10px; color: var(--text-sec); font-family: var(--font-mono);">${zone.reps}</td>
          </tr>
        `;
      });
      zonesBody.innerHTML = tableRows;
    }

    function drawOneRmChart(history) {
      const canvas = document.getElementById('oneRmChartCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      if (rect.width === 0) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = 180 * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = 180;

      ctx.clearRect(0, 0, w, h);

      const isLight = document.body.classList.contains('light-theme');
      const textColor = isLight ? '#4a5a78' : '#7a8ba8';
      const gridColor = isLight ? 'rgba(0, 82, 204, 0.1)' : 'rgba(30, 42, 58, 0.5)';
      const accentColor = isLight ? '#0052cc' : '#0066ff';
      const successColor = isLight ? '#00a854' : '#00e676';
      const gradientStart = isLight ? 'rgba(0, 82, 204, 0.12)' : 'rgba(0, 102, 255, 0.15)';

      const paddingLeft = 45;
      const paddingRight = 16;
      const paddingTop = 20;
      const paddingBottom = 35;

      const chartW = w - paddingLeft - paddingRight;
      const chartH = h - paddingTop - paddingBottom;

      const rms = history.map(h => h.rm);
      const minRm = Math.min(...rms);
      const maxRm = Math.max(...rms);
      
      const diff = maxRm - minRm;
      let minWVal = minRm - (diff * 0.1);
      let maxWVal = maxRm + (diff * 0.1);
      
      if (minWVal === maxWVal || diff === 0) {
        minWVal = minRm - 5;
        maxWVal = maxRm + 5;
      }
      if (minWVal < 0) minWVal = 0;
      
      const weightRange = maxWVal - minWVal;

      const gridSteps = 4;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.font = '10px var(--font-mono)';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'right';

      for (let i = 0; i <= gridSteps; i++) {
        const yVal = minWVal + (weightRange * (i / gridSteps));
        const y = h - paddingBottom - (chartH * (i / gridSteps));
        
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();

        ctx.fillText(Math.round(yVal) + ' kg', paddingLeft - 8, y + 4);
      }

      const points = history.map((log, idx) => {
        const x = history.length === 1 
          ? paddingLeft + chartW / 2 
          : paddingLeft + (chartW * (idx / (history.length - 1)));
        const y = h - paddingBottom - (((log.rm - minWVal) / weightRange) * chartH);
        return { x, y, date: log.date, rm: log.rm };
      });

      if (points.length > 1) {
        const areaGrad = ctx.createLinearGradient(0, paddingTop, 0, h - paddingBottom);
        areaGrad.addColorStop(0, gradientStart);
        areaGrad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(points[0].x, h - paddingBottom);
        points.forEach(pt => ctx.lineTo(pt.x, pt.y));
        ctx.lineTo(points[points.length - 1].x, h - paddingBottom);
        ctx.closePath();
        ctx.fillStyle = areaGrad;
        ctx.fill();
      }

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      const bestRm = maxRm;
      canvas.chartPoints = points;

      points.forEach(pt => {
        const isBest = Math.abs(pt.rm - bestRm) < 0.0001;
        ctx.beginPath();
        if (isBest) {
          ctx.arc(pt.x, pt.y, 8, 0, 2 * Math.PI);
          ctx.fillStyle = successColor;
        } else {
          ctx.arc(pt.x, pt.y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = accentColor;
        }
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, isBest ? 4 : 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      ctx.textAlign = 'center';
      ctx.font = '9px var(--font-mono)';
      ctx.fillStyle = textColor;

      const rotateLabels = history.length > 10;

      points.forEach(pt => {
        const d = new Date(pt.date + 'T00:00:00');
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const label = `${day}/${month}`;
        
        ctx.save();
        ctx.translate(pt.x, h - paddingBottom + 14);
        if (rotateLabels) {
          ctx.rotate(45 * Math.PI / 180);
        }
        ctx.fillText(label, 0, 0);
        ctx.restore();
      });
    }

    function initOneRmTooltip() {
      const canvas = document.getElementById('oneRmChartCanvas');
      const tooltip = document.getElementById('oneRmTooltip');
      if (!canvas || !tooltip) return;

      const handleMove = (e) => {
        if (!canvas.chartPoints || canvas.chartPoints.length === 0) return;
        
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        let closestPt = null;
        let minDist = 25;
        
        canvas.chartPoints.forEach(pt => {
          const dx = pt.x - x;
          const dy = pt.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            closestPt = pt;
          }
        });

        if (closestPt) {
          const d = new Date(closestPt.date + 'T00:00:00');
          const day = d.getDate().toString().padStart(2, '0');
          const month = (d.getMonth() + 1).toString().padStart(2, '0');
          const formattedDate = `${day}/${month}`;
          
          tooltip.innerHTML = `${formattedDate} — <strong>${closestPt.rm.toFixed(1)} kg</strong>`;
          tooltip.style.display = 'block';
          tooltip.style.left = (x + 10) + 'px';
          tooltip.style.top = (y - 30) + 'px';
        } else {
          tooltip.style.display = 'none';
        }
      };

      const handleLeave = () => {
        tooltip.style.display = 'none';
      };

      canvas.addEventListener('mousemove', handleMove);
      canvas.addEventListener('touchmove', handleMove, { passive: true });
      canvas.addEventListener('mouseleave', handleLeave);
      canvas.addEventListener('touchend', handleLeave);
    }

    /***************************************************************************
     * 11. EXERCISES LIBRARY VIEW LOGIC (Ejercicios)
     **************************************************************************/
    function renderExerciseLibrary() {
      renderLibMuscleChips();

      const query = document.getElementById('libSearchInput').value.trim().toLowerCase();
      
      let activeGroup = "Todos";
      const chips = document.getElementById('libMuscleChips').querySelectorAll('.chip');
      chips.forEach(c => {
        if (c.classList.contains('active-chip')) {
          activeGroup = c.textContent;
        }
      });

      const listContainer = document.getElementById('exerciseLibraryList');
      listContainer.innerHTML = '';

      const filtered = EXERCISES.filter(ex => {
        const matchGroup = activeGroup === "Todos" || ex.group === activeGroup;
        const matchQuery = ex.name.toLowerCase().includes(query) || ex.description.toLowerCase().includes(query);
        return matchGroup && matchQuery;
      });

      if (filtered.length === 0) {
        listContainer.innerHTML = `
          <div class="empty-state">
            <p>No se encontraron ejercicios.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
          <div class="ex-card-header">
            <div>
              <div class="ex-card-title">${ex.name}</div>
              <div class="ex-card-meta">
                <span class="chip active-chip">${ex.group}</span>
                <span class="chip">${ex.equipment}</span>
              </div>
            </div>
            <svg class="ex-card-expand-icon" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
          </div>
          <div class="ex-card-body">
            <div class="ex-card-details-layout">
              <div class="anim-container">
                ${getAnimationSVG(ex.animationType)}
              </div>
              <div class="ex-description">
                ${ex.description}
              </div>
            </div>
          </div>
        `;

        card.querySelector('.ex-card-header').addEventListener('click', () => {
          card.classList.toggle('expanded');
        });

        listContainer.appendChild(card);
      });
    }

    function renderLibMuscleChips() {
      const container = document.getElementById('libMuscleChips');
      if (container.children.length > 0) return;

      const groups = ["Todos", "Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas", "Abdominales"];
      groups.forEach((group, idx) => {
        const chip = document.createElement('button');
        chip.className = `chip ${idx === 0 ? "active-chip" : ""}`;
        chip.textContent = group;
        chip.addEventListener('click', (e) => {
          container.querySelectorAll('.chip').forEach(c => c.classList.remove('active-chip'));
          chip.classList.add('active-chip');
          renderExerciseLibrary();
        });
        container.appendChild(chip);
      });
    }


    /***************************************************************************
     * 11b. SUPPLEMENTS LIBRARY VIEW LOGIC (Suplementos)
     **************************************************************************/
    function renderSupplementLibrary() {
      renderSupplementCategoryChips();

      const searchEl = document.getElementById('suppSearchInput');
      const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

      let activeCategory = "Todos";
      const chipsContainer = document.getElementById('suppCategoryChips');
      if (chipsContainer) {
        chipsContainer.querySelectorAll('.chip').forEach(function(c) {
          if (c.classList.contains('active-chip')) activeCategory = c.textContent;
        });
      }

      const listContainer = document.getElementById('supplementLibraryList');
      if (!listContainer) return;
      listContainer.innerHTML = '';

      const filtered = SUPPLEMENTS.filter(function(s) {
        const matchCat = activeCategory === "Todos" || s.category === activeCategory;
        const matchQuery = s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query);
        return matchCat && matchQuery;
      });

      if (filtered.length === 0) {
        listContainer.innerHTML = '<div class="empty-state"><p>No se encontraron suplementos.</p></div>';
        return;
      }



      const todayStr = getFormattedDateKey(new Date());
      const todayLog = supplementLog[todayStr] || [];

      filtered.forEach(function(supp) {
        const card = document.createElement('div');
        card.className = 'exercise-card supp-card';
        card.dataset.suppId = supp.id;

        const icon = SUPPLEMENT_ICONS[supp.iconType] || SUPPLEMENT_ICONS.capsule;
        const isTaken = todayLog.includes(supp.id);
        const badgeHtml = isTaken ? '<span class="supp-taken-today-badge">\u2713 Tomado hoy</span>' : '';
        const warningHtml = supp.warning
          ? '<div class="supp-warning-box"><span>\u26a0\ufe0f</span> ' + supp.warning + '</div>'
          : '';

        card.innerHTML = [
          '<div class="ex-card-header">',
          '  <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;">',
          '    <div class="anim-container" style="flex-shrink:0;">' + icon + '</div>',
          '    <div style="min-width:0;">',
          '      <div class="ex-card-title">' + supp.name + '</div>',
          '      <div class="ex-card-meta">',
          '        <span class="chip active-chip">' + supp.category + '</span>',
          '        ' + badgeHtml,
          '      </div>',
          '    </div>',
          '  </div>',
          '  <svg class="ex-card-expand-icon" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>',
          '</div>',
          '<div class="ex-card-body">',
          '  <p class="ex-description" style="margin-bottom:14px;">' + supp.description + '</p>',
          '  <div class="supp-info-grid">',
          '    <div class="supp-info-item">',
          '      <div class="supp-info-label">\ud83d\udc8a Dosis</div>',
          '      <div class="supp-info-value">' + supp.dose + '</div>',
          '    </div>',
          '    <div class="supp-info-item">',
          '      <div class="supp-info-label">\u23f0 Momento</div>',
          '      <div class="supp-info-value">' + supp.timing + '</div>',
          '    </div>',
          '  </div>',
          '  ' + warningHtml,
          '</div>'
        ].join('\n');

        card.querySelector('.ex-card-header').addEventListener('click', function() {
          card.classList.toggle('expanded');
        });



        listContainer.appendChild(card);
      });
    }

    function toggleSupplementTaken(suppId) {
      const todayStr = getFormattedDateKey(new Date());
      if (!supplementLog[todayStr]) supplementLog[todayStr] = [];

      const idx = supplementLog[todayStr].indexOf(suppId);
      const wasTaken = idx !== -1;

      if (!wasTaken) {
        supplementLog[todayStr].push(suppId);
        const suppObj = SUPPLEMENTS.find(function(s) { return s.id === suppId; });
        showToast('\u2713 ' + (suppObj ? suppObj.name : 'Suplemento') + ' tomado');
      } else {
        supplementLog[todayStr].splice(idx, 1);
      }

      storage.setSupplementLog(supplementLog);

      // Update only the affected card (keep expanded state intact)
      const card = document.querySelector('.supp-card[data-supp-id="' + suppId + '"]');
      if (card) {
        const nowTaken = !wasTaken;
        const btn = card.querySelector('.supp-taken-btn');
        const existingBadge = card.querySelector('.supp-taken-today-badge');
        const metaDiv = card.querySelector('.ex-card-meta');
        if (nowTaken) {
          btn.classList.add('is-taken');
          btn.textContent = '\u2713 Tomado hoy';
          if (!existingBadge && metaDiv) {
            const badge = document.createElement('span');
            badge.className = 'supp-taken-today-badge';
            badge.textContent = '\u2713 Tomado hoy';
            metaDiv.appendChild(badge);
          }
        } else {
          btn.classList.remove('is-taken');
          btn.textContent = '\u25cb Marcar como tomado hoy';
          if (existingBadge) existingBadge.remove();
        }
      }

      syncWithCloud();
    }

    function renderSupplementCategoryChips() {
      const container = document.getElementById('suppCategoryChips');
      if (!container || container.children.length > 0) return;
      const categories = ["Todos", "Proteinas", "Creatinas", "Aminoacidos", "Quemadores", "Vitaminas", "Otros"];
      categories.forEach(function(cat, idx) {
        const chip = document.createElement('button');
        chip.className = 'chip' + (idx === 0 ? ' active-chip' : '');
        chip.textContent = cat;
        chip.addEventListener('click', function() {
          container.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('active-chip'); });
          chip.classList.add('active-chip');
          renderSupplementLibrary();
        });
        container.appendChild(chip);
      });
    }


    /***************************************************************************
     * 12. UTILS & GENERAL HELPERS
     **************************************************************************/
    function getFormattedDateKey(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function showToast(message) {
      const toast = document.getElementById('successToast');
      document.getElementById('toastMessage').textContent = message;
      
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    function showCustomConfirm(title, message, onYes, onNo = null) {
      const modal = document.getElementById('customConfirmModal');
      const titleEl = document.getElementById('confirmTitle');
      const msgEl = document.getElementById('confirmMessage');
      const yesBtn = document.getElementById('confirmYesBtn');
      const noBtn = document.getElementById('confirmNoBtn');

      if (!modal || !titleEl || !msgEl || !yesBtn || !noBtn) {
        if (confirm(message)) {
          onYes();
        } else if (onNo) {
          onNo();
        }
        return;
      }

      titleEl.textContent = title;
      msgEl.textContent = message;

      const newYesBtn = yesBtn.cloneNode(true);
      const newNoBtn = noBtn.cloneNode(true);
      yesBtn.parentNode.replaceChild(newYesBtn, yesBtn);
      noBtn.parentNode.replaceChild(newNoBtn, noBtn);

      newYesBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        onYes();
      });

      newNoBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        if (onNo) onNo();
      });

      modal.classList.add('open');
    }

    function initTheme() {
      const savedTheme = localStorage.getItem('gymtracker_theme');
      const themeToggleBtn = document.getElementById('themeToggleBtn');
      
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeColorMeta('#f0f4ff');
        setThemeIcon('sun');
      } else {
        document.body.classList.remove('light-theme');
        updateThemeColorMeta('#0a0a0f');
        setThemeIcon('moon');
      }

      themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('gymtracker_theme', isLight ? 'light' : 'dark');
        updateThemeColorMeta(isLight ? '#f0f4ff' : '#0a0a0f');
        setThemeIcon(isLight ? 'sun' : 'moon');
        
        if (currentActiveView === 'perfil') {
          drawSparkline();
        } else if (currentActiveView === 'progreso') {
          drawProgressCharts();
        }
      });
    }

    function updateThemeColorMeta(color) {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', color);
      }
    }

    function setThemeIcon(theme) {
      const icon = document.getElementById('themeIcon');
      if (!icon) return;
      if (theme === 'sun') {
        // Path for Sun Icon
        icon.innerHTML = `<path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,3.5A8.5,8.5 0 1,0 20.5,12A8.5,8.5 0 0,0 12,3.5Z"/>`;
      } else {
        // Path for Moon Icon
        icon.innerHTML = `<path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"/>`;
      }
    }

    /***************************************************************************
     * 13. INACTIVITY TIMER & AUTO-LOGOUT
     **************************************************************************/
    function initInactivityTracker() {
      const INACTIVITY_TIME = 15 * 60 * 1000; // 15 minutes in ms
      const WARNING_TIME = 60; // 60 seconds

      let warningActive = false;
      let secondsLeft = WARNING_TIME;

      function resetTimer() {
        if (!currentUser) return; // Don't run timer if logged out
        if (warningActive) return;
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showInactivityWarning, INACTIVITY_TIME);
      }

      function showInactivityWarning() {
        warningActive = true;
        secondsLeft = WARNING_TIME;
        const overlay = document.getElementById('inactivityOverlay');
        const countdownEl = document.getElementById('inactivityCountdown');
        
        if (overlay) overlay.classList.add('open');
        if (countdownEl) countdownEl.textContent = secondsLeft;

        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
          secondsLeft--;
          if (countdownEl) countdownEl.textContent = secondsLeft;

          if (secondsLeft <= 0) {
            clearInterval(countdownInterval);
            autoLogout();
          }
        }, 1000);
      }

      function extendSession() {
        warningActive = false;
        clearInterval(countdownInterval);
        const overlay = document.getElementById('inactivityOverlay');
        if (overlay) overlay.classList.remove('open');
        resetTimer();
        showToast("Sesión extendida");
      }

      function autoLogout() {
        warningActive = false;
        const overlay = document.getElementById('inactivityOverlay');
        if (overlay) overlay.classList.remove('open');
        
        // Clear session and data
        if (syncIntervalId) {
          clearInterval(syncIntervalId);
          syncIntervalId = null;
        }
        storage.setSession(null);
        localStorage.removeItem('gymtracker_user');
        localStorage.removeItem('gymtracker_sessions');
        localStorage.removeItem('gymtracker_bodylog');
        localStorage.removeItem('gymtracker_last_modified');
        localStorage.removeItem('gymtracker_last_sync');
        currentUser = null;
        sessions = {};
        bodyLog = [];
        supplementLog = {};
        localStorage.removeItem('gymtracker_supplog');
        
        showAuthScreen();
        showToast("Sesión cerrada por inactividad");
      }

      // Add event listeners for user activity
      const events = ['mousemove', 'keydown', 'click', 'touchstart', 'scroll'];
      events.forEach(event => {
        window.addEventListener(event, resetTimer, { passive: true });
      });

      // Bind extend session button
      const extendBtn = document.getElementById('extendSessionBtn');
      if (extendBtn) {
        extendBtn.addEventListener('click', extendSession);
      }

      // Start initial timer
      resetTimer();
    }

    /***************************************************************************
     * 14. STOPWATCH & REST TIMER DRAWER
     **************************************************************************/
    function playBeep() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        const playTone = (time, duration, frequency) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = frequency;
          
          gain.gain.setValueAtTime(0.3, time);
          gain.gain.exponentialRampToValueAtTime(0.01, time + duration - 0.05);
          
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start(time);
          osc.stop(time + duration);
        };
        
        const now = ctx.currentTime;
        playTone(now, 0.25, 880);      // High pitch A5
        playTone(now + 0.3, 0.35, 880); // Another A5
      } catch (e) {
        console.error("AudioContext error:", e);
      }
    }

    function initStopwatchAndTimer() {
      // ── Stopwatch Logic ──
      const stopwatchDisplay = document.getElementById('stopwatchDisplay');
      const startBtn = document.getElementById('stopwatchStartBtn');
      const lapBtn = document.getElementById('stopwatchLapBtn');
      const resetBtn = document.getElementById('stopwatchResetBtn');
      const lapsList = document.getElementById('stopwatchLapsList');

      function updateStopwatchUI() {
        const mins = Math.floor(stopwatchTime / 6000).toString().padStart(2, '0');
        const secs = Math.floor((stopwatchTime % 6000) / 100).toString().padStart(2, '0');
        const centis = (stopwatchTime % 100).toString().padStart(2, '0');
        if (stopwatchDisplay) {
          stopwatchDisplay.textContent = `${mins}:${secs}.${centis}`;
        }
      }

      startBtn.addEventListener('click', () => {
        if (stopwatchRunning) {
          // Pause
          clearInterval(stopwatchInterval);
          stopwatchRunning = false;
          startBtn.textContent = 'Iniciar';
          lapBtn.disabled = true;
        } else {
          // Start
          stopwatchRunning = true;
          startBtn.textContent = 'Pausar';
          lapBtn.disabled = false;
          const startTime = Date.now() - stopwatchTime * 10;
          stopwatchInterval = setInterval(() => {
            stopwatchTime = Math.floor((Date.now() - startTime) / 10);
            updateStopwatchUI();
          }, 10);
        }
      });

      lapBtn.addEventListener('click', () => {
        if (!stopwatchRunning) return;
        const lapNum = stopwatchLaps.length + 1;
        const mins = Math.floor(stopwatchTime / 6000).toString().padStart(2, '0');
        const secs = Math.floor((stopwatchTime % 6000) / 100).toString().padStart(2, '0');
        const centis = (stopwatchTime % 100).toString().padStart(2, '0');
        const lapTime = `${mins}:${secs}.${centis}`;
        stopwatchLaps.push(lapTime);

        const lapEl = document.createElement('div');
        lapEl.style.padding = '4px 8px';
        lapEl.style.background = 'rgba(255,255,255,0.02)';
        lapEl.style.borderBottom = '1px solid var(--border)';
        lapEl.innerHTML = `<span style="color:var(--text-sec);">Vuelta ${lapNum}:</span> <span style="float:right; font-weight:bold; color:var(--accent);">${lapTime}</span>`;
        lapsList.appendChild(lapEl);
        lapsList.scrollTop = lapsList.scrollHeight;
      });

      resetBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        stopwatchTime = 0;
        stopwatchLaps = [];
        startBtn.textContent = 'Iniciar';
        lapBtn.disabled = true;
        updateStopwatchUI();
        lapsList.innerHTML = '';
      });

      // ── Rest Timer Logic ──
      const timerDisplay = document.getElementById('timerDisplay');
      const timerStartBtn = document.getElementById('timerStartBtn');
      const timerResetBtn = document.getElementById('timerResetBtn');
      const customMinInput = document.getElementById('timerMinInput');
      const customSecInput = document.getElementById('timerSecInput');
      const setTimerBtn = document.getElementById('setTimerBtn');

      function updateTimerUI() {
        const mins = Math.floor(timerTime / 60).toString().padStart(2, '0');
        const secs = (timerTime % 60).toString().padStart(2, '0');
        if (timerDisplay) {
          timerDisplay.textContent = `${mins}:${secs}`;
        }
      }

      function flashScreen() {
        const drawer = document.getElementById('timerDrawer');
        if (!drawer) return;
        let flashes = 6;
        const interval = setInterval(() => {
          if (flashes % 2 === 0) {
            drawer.style.background = 'rgba(255, 68, 68, 0.2)';
          } else {
            drawer.style.background = 'var(--surface)';
          }
          flashes--;
          if (flashes <= 0) {
            clearInterval(interval);
            drawer.style.background = '';
          }
        }, 300);
      }

      timerStartBtn.addEventListener('click', () => {
        if (timerRunning) {
          // Pause
          clearInterval(timerInterval);
          timerRunning = false;
          timerStartBtn.textContent = 'Iniciar';
        } else {
          // Start
          if (timerTime <= 0) return;
          timerRunning = true;
          timerStartBtn.textContent = 'Pausar';
          timerInterval = setInterval(() => {
            timerTime--;
            updateTimerUI();

            if (timerTime <= 0) {
              clearInterval(timerInterval);
              timerRunning = false;
              timerStartBtn.textContent = 'Iniciar';
              playBeep();
              flashScreen();
              showToast("¡Tiempo de descanso finalizado!");
              timerTime = timerOriginalTime;
              updateTimerUI();
            }
          }, 1000);
        }
      });

      timerResetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerRunning = false;
        timerStartBtn.textContent = 'Iniciar';
        timerTime = timerOriginalTime;
        updateTimerUI();
      });

      setTimerBtn.addEventListener('click', () => {
        const mins = parseInt(customMinInput.value) || 0;
        const secs = parseInt(customSecInput.value) || 0;
        const total = mins * 60 + secs;
        if (total > 0) {
          clearInterval(timerInterval);
          timerRunning = false;
          timerStartBtn.textContent = 'Iniciar';
          timerTime = total;
          timerOriginalTime = total;
          updateTimerUI();
          showToast(`Temporizador ajustado a ${mins}m ${secs}s`);
        }
      });

      // Quick presets
      document.querySelectorAll('.btn-quick-time').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.btn-quick-time').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const secs = parseInt(btn.getAttribute('data-secs')) || 90;
          clearInterval(timerInterval);
          timerRunning = false;
          timerStartBtn.textContent = 'Iniciar';
          timerTime = secs;
          timerOriginalTime = secs;
          updateTimerUI();
          showToast(`Descanso: ${Math.floor(secs / 60)}m ${secs % 60}s`);
        });
      });

      // ── Digital Clock ──
      const clockDisplay = document.getElementById('clockDisplay');
      setInterval(() => {
        const now = new Date();
        const hrs = now.getHours().toString().padStart(2, '0');
        const mins = now.getMinutes().toString().padStart(2, '0');
        const secs = now.getSeconds().toString().padStart(2, '0');
        if (clockDisplay) {
          clockDisplay.textContent = `${hrs}:${mins}:${secs}`;
        }
      }, 1000);

      // Drawer open/close
      const drawer = document.getElementById('timerDrawer');
      const overlay = document.getElementById('timerOverlay');
      const toggleBtn = document.getElementById('timerToggleBtn');
      const closeBtn = document.getElementById('closeTimerDrawerBtn');

      function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('open');
      }

      function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
      }

      toggleBtn.addEventListener('click', openDrawer);
      closeBtn.addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);
    }

    /***************************************************************************
     * 15. PREDEFINED ROUTINES VIEW & CRUD
     **************************************************************************/
    let currentEditingRoutineIndex = null;
    let routineSelectedExercises = [];

    function renderRoutines() {
      const container = document.getElementById('routinesContainer');
      if (!container) return;
      container.innerHTML = '';

      if (routines.length === 0) {
        container.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1; padding: 40px 20px;">
            <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; fill: var(--border); margin-bottom: 16px;"><path d="M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8H19V19M17,12H12V17H17V12Z"/></svg>
            <p style="color:var(--text-sec); font-weight:500;">No tenés rutinas creadas</p>
            <p style="font-size:0.8rem; color:var(--text-sec); margin-top:4px;">Tocá el botón "+" abajo para crear tu primera rutina</p>
          </div>
        `;
        return;
      }

      routines.forEach((routine, rIdx) => {
        const muscleGroups = [];
        routine.exercises.forEach(exId => {
          const ex = EXERCISES.find(e => e.id === exId);
          if (ex && !muscleGroups.includes(ex.group)) {
            muscleGroups.push(ex.group);
          }
        });

        const card = document.createElement('div');
        card.className = 'routine-card';
        
        let chipsHtml = '';
        muscleGroups.forEach(g => {
          chipsHtml += `<span class="chip active-chip">${g}</span>`;
        });

        card.innerHTML = `
          <div class="routine-card-header">
            <h3 class="routine-card-title">${routine.name}</h3>
            <div class="routine-card-actions">
              <button class="btn-action-small" onclick="editRoutine(${rIdx})" aria-label="Editar">
                <svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.07,6.19L3,17.25Z"/></svg>
              </button>
              <button class="btn-action-small danger" onclick="deleteRoutine(${rIdx})" aria-label="Eliminar">
                <svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg>
              </button>
            </div>
          </div>
          <div class="routine-card-body">
            <span class="routine-exercise-count">📋 ${routine.exercises.length} ejercicios</span>
            <div class="routine-muscle-chips">
              ${chipsHtml}
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    }

    window.editRoutine = function(index) {
      currentEditingRoutineIndex = index;
      const routine = routines[index];
      
      document.getElementById('routineModalTitle').textContent = "Editar Rutina";
      document.getElementById('routineNameInput').value = routine.name;
      routineSelectedExercises = [...routine.exercises];
      
      renderRoutineSelectedExercises();
      document.getElementById('routineModal').classList.add('open');
    };

    window.deleteRoutine = function(index) {
      showCustomConfirm(
        "Eliminar Rutina",
        "¿Estás seguro de que querés eliminar esta rutina?",
        () => {
          routines.splice(index, 1);
          storage.setRoutines(routines);
          renderRoutines();
          showToast("Rutina eliminada");
          syncWithCloud();
        }
      );
    };

    function renderRoutineSelectedExercises() {
      const container = document.getElementById('routineSelectedExercisesList');
      if (!container) return;
      container.innerHTML = '';

      if (routineSelectedExercises.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; padding:20px; color:var(--text-sec); font-size:0.82rem;">
            Sin ejercicios seleccionados
          </div>
        `;
        return;
      }

      routineSelectedExercises.forEach((exId, idx) => {
        const ex = EXERCISES.find(e => e.id === exId);
        if (!ex) return;

        const row = document.createElement('div');
        row.className = 'routine-selected-item';
        row.innerHTML = `
          <div class="routine-selected-item-info">
            <span class="routine-selected-item-name">${ex.name}</span>
            <span class="routine-selected-item-meta">${ex.group} • ${ex.equipment}</span>
          </div>
          <div class="routine-selected-item-actions">
            <button class="btn-action-small" onclick="moveRoutineExercise(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} style="padding: 4px;">▲</button>
            <button class="btn-action-small" onclick="moveRoutineExercise(${idx}, 1)" ${idx === routineSelectedExercises.length - 1 ? 'disabled' : ''} style="padding: 4px;">▼</button>
            <button class="btn-action-small danger" onclick="removeRoutineExercise(${idx})" style="padding: 4px; margin-left: 4px;">
              <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/></svg>
            </button>
          </div>
        `;
        container.appendChild(row);
      });
    }

    window.moveRoutineExercise = function(index, direction) {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= routineSelectedExercises.length) return;
      
      const temp = routineSelectedExercises[index];
      routineSelectedExercises[index] = routineSelectedExercises[targetIndex];
      routineSelectedExercises[targetIndex] = temp;
      
      renderRoutineSelectedExercises();
    };

    window.removeRoutineExercise = function(index) {
      routineSelectedExercises.splice(index, 1);
      renderRoutineSelectedExercises();
    };

    function openRoutineExerciseSelector() {
      document.getElementById('routineExSearchInput').value = '';
      renderRoutineExMuscleChips();
      renderRoutineExSelectorAccordion("Todos");
      document.getElementById('routineExerciseSelectorModal').classList.add('open');
    }

    function renderRoutineExMuscleChips() {
      const container = document.getElementById('routineExMuscleChips');
      if (!container) return;
      container.innerHTML = '';

      const groups = ["Todos", "Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas", "Abdominales"];
      groups.forEach(group => {
        const chip = document.createElement('button');
        chip.className = `chip ${group === "Todos" ? "active-chip" : ""}`;
        chip.textContent = group;
        chip.addEventListener('click', () => {
          container.querySelectorAll('.chip').forEach(c => c.classList.remove('active-chip'));
          chip.classList.add('active-chip');
          renderRoutineExSelectorAccordion(group);
        });
        container.appendChild(chip);
      });
    }

    function renderRoutineExSelectorAccordion(filterMuscleGroup) {
      const container = document.getElementById('routineExAccordionContainer');
      if (!container) return;
      container.innerHTML = '';

      const query = document.getElementById('routineExSearchInput').value.trim().toLowerCase();

      const grouped = {};
      EXERCISES.forEach(ex => {
        if (filterMuscleGroup !== "Todos" && ex.group !== filterMuscleGroup) return;
        if (query.length > 0 && !ex.name.toLowerCase().includes(query)) return;

        if (!grouped[ex.group]) grouped[ex.group] = [];
        grouped[ex.group].push(ex);
      });

      Object.keys(grouped).forEach(group => {
        const section = document.createElement('div');
        section.className = 'accordion-section active-acc';
        
        let listHtml = '';
        grouped[group].forEach(ex => {
          listHtml += `
            <div class="accordion-item" onclick="addExerciseToRoutine('${ex.id}')" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border-bottom:1px solid var(--border);">
              <div>
                <span style="font-weight:600; font-size:0.9rem;">${ex.name}</span>
                <span style="display:block; font-size:0.72rem; color:var(--text-sec); margin-top:2px;">${ex.equipment}</span>
              </div>
              <span style="color:var(--accent); font-weight:bold; font-size:1.2rem;">＋</span>
            </div>
          `;
        });

        section.innerHTML = `
          <div class="accordion-header">
            <h3>${group}</h3>
            <svg class="accordion-header-arrow" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </div>
          <div class="accordion-body">
            ${listHtml}
          </div>
        `;

        section.querySelector('.accordion-header').addEventListener('click', () => {
          section.classList.toggle('active-acc');
        });

        container.appendChild(section);
      });
    }

    window.addExerciseToRoutine = function(exId) {
      routineSelectedExercises.push(exId);
      renderRoutineSelectedExercises();
      document.getElementById('routineExerciseSelectorModal').classList.remove('open');
      showToast("Ejercicio agregado a la rutina");
    };

    function saveRoutine() {
      const name = document.getElementById('routineNameInput').value.trim();
      if (!name) {
        showToast("Ingresá un nombre para la rutina");
        return;
      }
      if (routineSelectedExercises.length === 0) {
        showToast("La rutina debe tener al menos 1 ejercicio");
        return;
      }

      if (currentEditingRoutineIndex === null) {
        if (routines.length >= 10) {
          showToast("Límite de 10 rutinas alcanzado");
          return;
        }
        routines.push({ name, exercises: [...routineSelectedExercises] });
      } else {
        routines[currentEditingRoutineIndex] = { name, exercises: [...routineSelectedExercises] };
      }

      storage.setRoutines(routines);
      renderRoutines();
      document.getElementById('routineModal').classList.remove('open');
      showToast(currentEditingRoutineIndex === null ? "Rutina creada" : "Rutina guardada");
      
      syncWithCloud();
    }

    function openLoadRoutineModal() {
      const container = document.getElementById('loadRoutineList');
      if (!container) return;
      container.innerHTML = '';

      if (routines.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; padding:24px; color:var(--text-sec); font-size:0.85rem;">
            No tenés rutinas creadas. Crealas en la pestaña "Rutinas"
          </div>
        `;
        document.getElementById('loadRoutineModal').classList.add('open');
        return;
      }

      routines.forEach((routine, rIdx) => {
        const item = document.createElement('button');
        item.className = 'supp-modal-item';
        item.style.marginBottom = '8px';
        item.innerHTML = `
          <div style="flex:1;">
            <div style="font-weight:700; font-size:0.95rem; color:var(--text);">${routine.name}</div>
            <div style="font-size:0.75rem; color:var(--text-sec); margin-top:2px;">📋 ${routine.exercises.length} ejercicios</div>
          </div>
          <span style="color:var(--accent); font-weight:bold; font-size:1.1rem;">Cargar</span>
        `;
        item.addEventListener('click', () => {
          loadRoutineIntoDay(routine);
        });
        container.appendChild(item);
      });

      document.getElementById('loadRoutineModal').classList.add('open');
    }

    function loadRoutineIntoDay(routine) {
      document.getElementById('loadRoutineModal').classList.remove('open');
      
      const dateStr = getFormattedDateKey(currentSelectedDate);
      if (!sessions[dateStr]) {
        sessions[dateStr] = [];
      }

      const startIndex = sessions[dateStr].length;

      routine.exercises.forEach(exId => {
        sessions[dateStr].push({
          exerciseId: exId,
          sets: [{ weight: 0, reps: 0 }]
        });
      });

      storage.setSessions(sessions);
      
      renderCalendar();
      openDayDetailPanel();

      showToast(`Rutina "${routine.name}" cargada`);

      syncWithCloud();

      showCustomConfirm(
        "Cargar pesos/reps",
        "¿Querés registrar los pesos y repeticiones ahora? (Si seleccionás Cancelar, la rutina quedará cargada y podrás editarlos uno por uno a medida que vas entrenando)",
        () => {
          const firstExInfo = EXERCISES.find(e => e.id === routine.exercises[0]);
          if (firstExInfo) {
            isEditingExerciseIndex = startIndex;
            openAddExerciseStep2(firstExInfo, [{ weight: 0, reps: 0 }]);
          }
        }
      );
    }
  