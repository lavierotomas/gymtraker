
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
      { id: "sentadilla_bulgara", name: "Sentadilla búlgara", group: "Piernas", equipment: "Mancuernas", description: "Sentadilla a una pierna apoyando la punta del pie trasero en un banco elevado.", animationType: "squat" }
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
      }
    };

    /***************************************************************************
     * 2. STATE & GLOBALS
     **************************************************************************/
    let currentUser = null;
    let sessions = {};
    let bodyLog = [];
    let currentSelectedDate = new Date();
    let calendarMonthYear = new Date();
    let currentActiveView = "perfil";
    let isEditingExerciseIndex = null;

    let authMode = 'login'; // 'login' or 'register'
    let activeSyncStatus = 'offline'; // 'offline', 'synced', 'pending'

    /***************************************************************************
     * 3. INITIALIZATION & ROUTING
     **************************************************************************/

    window.addEventListener('DOMContentLoaded', async () => {
      // Initialize UI theme always first
      initTheme();

      // Register all event listeners immediately so UI is always interactive
      registerGlobalEvents();
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

            if (!currentUser) {
              showWelcomeScreen();
            } else {
              showAppScreen();
              switchView('perfil');
              syncWithCloud(); // Sync silently on start
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
    }

    function switchView(viewName) {
      currentActiveView = viewName;
      
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
      }
    }

    /***************************************************************************
     * 4. SUPABASE API & AUTHENTICATION INTEGRATION
     **************************************************************************/

    async function verifyOrRefreshSession(session) {
      const config = storage.getSupabaseConfig();
      if (!config || !session) return false;

      const expiresAt = session.expires_at || 0; // Epoch timestamp in seconds
      const nowEpoch = Math.floor(Date.now() / 1000);

      // If token has expired or expires in less than 5 minutes, refresh it
      if (expiresAt - nowEpoch < 300) {
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
            const tokenRefreshed = await verifyOrRefreshSession(session);
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
        user_data: currentUser || {},
        sessions_data: sessions || {},
        bodylog_data: bodyLog || [],
        updated_at: nowStr
      };

      const response = await fetch(`${config.url}/rest/v1/gymtracker_sync`, {
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
      currentUser = remoteData.user_data;
      sessions = remoteData.sessions_data;
      bodyLog = remoteData.bodylog_data;

      storage.setUser(currentUser);
      // Directly bypass setters modification flag update during sync write
      localStorage.setItem('gymtracker_sessions', JSON.stringify(sessions));
      localStorage.setItem('gymtracker_bodylog', JSON.stringify(bodyLog));

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
        if (confirm("¿Estás seguro de que querés cerrar sesión? Se eliminarán los datos locales de este dispositivo (asegurate de haber sincronizado).")) {
          storage.setSession(null);
          localStorage.removeItem('gymtracker_user');
          localStorage.removeItem('gymtracker_sessions');
          localStorage.removeItem('gymtracker_bodylog');
          localStorage.removeItem('gymtracker_last_modified');
          localStorage.removeItem('gymtracker_last_sync');
          currentUser = null;
          sessions = {};
          bodyLog = [];
          
          showAuthScreen();
          showToast("Sesión cerrada");
        }
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
      document.getElementById('closePanelBtn').addEventListener('click', closeDayDetailPanel);
      document.getElementById('panelOverlay').addEventListener('click', closeDayDetailPanel);

      // FAB and Empty State Add Buttons in Day Panel
      document.getElementById('fabAddExerciseBtn').addEventListener('click', openAddExerciseStep1);
      document.getElementById('emptyAddBtn').addEventListener('click', openAddExerciseStep1);

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
    }

    /***************************************************************************
     * 7. PROFILE VIEW LOGIC (Perfil)
     **************************************************************************/
    function renderProfile() {
      if (!currentUser) return;
      
      // Avatar initials
      const initials = currentUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
      document.getElementById('profileAvatar').textContent = initials;
      document.getElementById('profileName').textContent = currentUser.name;
      
      // Core Metrics
      document.getElementById('metricWeight').textContent = `${currentUser.weight.toFixed(1)} kg`;
      document.getElementById('metricHeight').textContent = `${currentUser.height} cm`;
      
      // Calculate IMC
      const heightM = currentUser.height / 100;
      const imc = currentUser.weight / (heightM * heightM);
      document.getElementById('metricImc').textContent = imc.toFixed(1);

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
    }

    function closeDayDetailPanel() {
      document.getElementById('dayDetailPanel').classList.remove('open');
      document.getElementById('panelOverlay').classList.remove('open');
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
            setsHtml += `
              <div class="set-summary-row">
                <span>Serie ${sIdx + 1}</span>
                <span>${set.weight} kg × ${set.reps} reps</span>
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

      const groups = ["Todos", "Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas"];
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
      const muscleGroups = ["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas"];

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

    function openStep2(exercise) {
      document.getElementById('addExerciseModalStep1').classList.remove('open');
      openAddExerciseStep2(exercise);
    }

    function openAddExerciseStep2(exercise, existingSets = null) {
      document.getElementById('step2ExerciseName').textContent = exercise.name;
      document.getElementById('step2MuscleChip').textContent = exercise.group;
      document.getElementById('step2EquipmentChip').textContent = exercise.equipment;
      
      document.getElementById('step2AnimContainer').innerHTML = getAnimationSVG(exercise.animationType);
      document.getElementById('saveSessionBtn').setAttribute('data-ex-id', exercise.id);

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
      row.innerHTML = `
        <td><span class="set-number-label">${rowCount + 1}</span></td>
        <td>
          <div class="set-row-stepper">
            <button type="button" class="btn-step-minus-weight">−</button>
            <input type="number" class="set-weight-input" step="2.5" min="0" max="999" value="${weight > 0 ? weight : ''}" placeholder="0">
            <button type="button" class="btn-step-plus-weight">＋</button>
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
        let val = parseFloat(weightInput.value) || 0;
        val = Math.max(0, val - 2.5);
        weightInput.value = val % 1 === 0 ? val : val.toFixed(1);
      });
      row.querySelector('.btn-step-plus-weight').addEventListener('click', () => {
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
        const weightVal = parseFloat(row.querySelector('.set-weight-input').value);
        const repsVal = parseInt(row.querySelector('.set-reps-input').value);

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
      document.getElementById('addExerciseModalStep2').classList.remove('open');
      
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

      const groups = ["Todos", "Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas"];
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
  