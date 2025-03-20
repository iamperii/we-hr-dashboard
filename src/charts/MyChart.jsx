import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{ value: 10 },
	{ value: 12 },
	{ value: 14 },
	{ value: 13 },
	{ value: 15 },
];

const MyChart = () => {
	return (
		<ResponsiveContainer width="100%" height={150} style={{display: "flex", alignSelf: "center"}}>
			<LineChart data={data}>
				<svg style={{ position: 'absolute', width: 0, height: 0 }}>
					<defs>
						<linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#FF5151" />
							<stop offset="100%" stopColor="#FFFFFF" />
						</linearGradient>

						<filter id="shadow" height="200%">
							<feDropShadow
								dx="0"
								dy="4"
								stdDeviation="4"
								floodColor="#FF5151"
							/>
						</filter>
					</defs>
				</svg>

				<YAxis hide />
				<Tooltip />

				<Line
					type="monotone"
					dataKey="value"
					stroke="url(#lineGradient)"
					strokeWidth={3}
					dot={false}
					filter="url(#shadow)"
				/>
			</LineChart>
		 </ResponsiveContainer>
	);
};

export default MyChart;
